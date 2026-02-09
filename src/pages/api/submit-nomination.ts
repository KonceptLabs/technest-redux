export async function POST({ request }) {
  try {
    console.log('[v0] POST request received');
    console.log('[v0] Request method:', request.method);
    console.log('[v0] Request headers:', Object.fromEntries(request.headers));
    
    // Parse JSON directly
    let data;
    try {
      data = await request.json();
      console.log('[v0] Successfully parsed JSON data:', JSON.stringify(data, null, 2));
    } catch (jsonError) {
      console.error('[v0] Failed to parse JSON:', jsonError);
      return new Response(JSON.stringify({ 
        success: false, 
        message: `Failed to parse JSON: ${jsonError instanceof Error ? jsonError.message : 'Unknown error'}` 
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
