export async function POST({ request }) {
  try {
    const data = await request.json();
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    
    console.log('[v0] Received nomination data:', JSON.stringify(data, null, 2));
    
    // Send data to Zapier webhook from server
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier webhook response status:', response.status);
    const responseText = await response.text();
    console.log('[v0] Zapier webhook response:', responseText);

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(`Webhook response error: ${response.status} - ${responseText}`);
    }
  } catch (error) {
    console.error('[v0] Error in submit-nomination API:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Error submitting nomination' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
