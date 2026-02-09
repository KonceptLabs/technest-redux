export async function POST({ request }) {
  try {
    console.log('[v0] POST request received');
    console.log('[v0] Request method:', request.method);
    console.log('[v0] Request URL:', request.url);
    console.log('[v0] Content-Type header:', request.headers.get('content-type'));
    console.log('[v0] All headers:', Array.from(request.headers.entries()));
    
    // Clone the request to safely read the body
    const clonedRequest = request.clone();
    
    // Try to get the body
    const bodyText = await clonedRequest.text();
    console.log('[v0] Body text received, length:', bodyText.length);
    console.log('[v0] Body content (first 200 chars):', bodyText.substring(0, 200));
    
    if (!bodyText || bodyText.trim() === '') {
      console.error('[v0] Request body is empty');
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Request body is empty' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Parse JSON
    let data;
    try {
      data = JSON.parse(bodyText);
      console.log('[v0] Successfully parsed JSON');
    } catch (parseError) {
      console.error('[v0] JSON parse error:', parseError);
      return new Response(JSON.stringify({ 
        success: false, 
        message: `Failed to parse JSON: ${parseError instanceof Error ? parseError.message : 'Unknown error'}` 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    console.log('[v0] Sending to Zapier webhook...');
    
    // Send data to Zapier webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier response status:', response.status);
    const zapierText = await response.text();
    console.log('[v0] Zapier response:', zapierText.substring(0, 200));

    if (response.ok) {
      console.log('[v0] Successfully submitted to Zapier');
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(`Zapier returned ${response.status}`);
    }
  } catch (error) {
    console.error('[v0] Error in API:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
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
