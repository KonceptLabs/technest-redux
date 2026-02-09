export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
    console.log('[v0] POST request received to /api/submit-nomination');
    console.log('[v0] Request URL:', request.url);
    console.log('[v0] Request method:', request.method);
    console.log('[v0] Content-Type:', request.headers.get('content-type'));
    
    // Try to parse JSON directly from request
    let data;
    try {
      data = await request.json();
      console.log('[v0] Successfully parsed request as JSON');
    } catch (jsonError) {
      console.error('[v0] Failed to parse request as JSON:', jsonError);
      // Try reading as text as fallback
      try {
        const text = await request.text();
        console.log('[v0] Request text length:', text.length);
        if (text) {
          data = JSON.parse(text);
          console.log('[v0] Successfully parsed text as JSON');
        } else {
          throw new Error('Request body is empty');
        }
      } catch (fallbackError) {
        console.error('[v0] Fallback also failed:', fallbackError);
        return new Response(
          JSON.stringify({ success: false, message: 'Failed to parse request body' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
    
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    console.log('[v0] Fetching geolocation data...');
    
    // Fetch geolocation data from the server IP address
    try {
      const geoResponse = await fetch('https://ipapi.co/json/');
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        data.ipAddress = geoData.ip || '';
        data.ipCountry = geoData.country_name || '';
        data.ipCity = geoData.city || '';
        data.ipZip = geoData.postal || '';
        console.log('[v0] Geolocation data added successfully');
      }
    } catch (geoError) {
      console.warn('[v0] Could not fetch geolocation:', geoError);
      // Continue without geolocation - not critical
    }
    
    console.log('[v0] Sending to Zapier webhook...');
    
    // Send data to Zapier webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier response status:', webhookResponse.status);
    
    if (webhookResponse.ok) {
      console.log('[v0] Successfully forwarded to Zapier');
      return new Response(
        JSON.stringify({ success: true, message: 'Nomination submitted successfully' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      const errorText = await webhookResponse.text();
      console.error('[v0] Zapier returned error:', webhookResponse.status, errorText);
      throw new Error(`Zapier webhook error: ${webhookResponse.status}`);
    }
  } catch (error) {
    console.error('[v0] API Error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error submitting nomination';
    return new Response(
      JSON.stringify({ success: false, message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
