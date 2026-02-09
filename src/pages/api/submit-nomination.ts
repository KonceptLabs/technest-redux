export async function POST({ request }) {
  try {
    const data = await request.json();
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    
    // Send data to Zapier webhook from server
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error('Webhook response error: ' + response.status);
    }
  } catch (error) {
    console.error('[v0] Error in submit-nomination API:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error submitting nomination' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
