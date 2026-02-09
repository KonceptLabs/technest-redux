export async function POST({ request }) {
  try {
    console.log('[v0] POST request received');
    console.log('[v0] Request method:', request.method);
    console.log('[v0] Request URL:', request.url);
    console.log('[v0] Content-Type:', request.headers.get('content-type'));
    
    // Try to get the body as text first to see what's there
    const bodyText = await request.text();
    console.log('[v0] Raw body text:', bodyText);
    console.log('[v0] Body text length:', bodyText.length);
    console.log('[v0] Body is empty:', bodyText === '');
    
    if (!bodyText || bodyText.trim() === '') {
      console.error('[v0] Request body is empty!');
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
      console.log('[v0] Successfully parsed JSON data');
    } catch (parseError) {
      console.error('[v0] JSON parse failed:', parseError);
      console.error('[v0] Failed to parse text:', bodyText.substring(0, 100));
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
    
    // Send data to Zapier webhook from server
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier response status:', response.status);
    const zapierResponse = await response.text();
    console.log('[v0] Zapier response text:', zapierResponse);

    if (response.ok) {
      console.log('[v0] Successfully submitted to Zapier');
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(`Zapier webhook returned ${response.status}: ${zapierResponse}`);
    }
  } catch (error) {
    console.error('[v0] Error in submit-nomination API:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      success: false, 
      message: errorMessage
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
