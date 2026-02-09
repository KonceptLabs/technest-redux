export async function POST({ request }) {
  try {
    // Parse the request body
    let data;
    try {
      const text = await request.text();
      console.log('[v0] Request body received, length:', text.length);
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('[v0] Failed to parse request body:', parseError);
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Invalid JSON in request body' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    console.log('[v0] Submitting to Zapier webhook...');
    
    // Fetch geolocation data from the client IP address
    try {
      const geoResponse = await fetch('https://ipapi.co/json/');
      const geoData = await geoResponse.json();
      
      // Add geolocation to data
      data.ipAddress = geoData.ip || '';
      data.ipCountry = geoData.country_name || '';
      data.ipCity = geoData.city || '';
      data.ipZip = geoData.postal || '';
    } catch (geoError) {
      console.error('[v0] Error fetching geolocation:', geoError);
      // Continue without geolocation data
    }
    
    // Send data to Zapier webhook from server
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier response status:', response.status);
    
    if (response.ok) {
      console.log('[v0] Successfully submitted to Zapier');
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const responseText = await response.text();
      console.error('[v0] Zapier error:', responseText);
      throw new Error(`Zapier webhook returned status ${response.status}`);
    }
  } catch (error) {
    console.error('[v0] Error in submit-nomination API:', error);
    const message = error instanceof Error ? error.message : 'Error submitting nomination';
    console.error('[v0] Error message:', message);
    return new Response(JSON.stringify({ 
      success: false, 
      message: message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
