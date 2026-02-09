export async function POST({ request }) {
  try {
    const data = await request.json();
    const webhookUrl = 'https://hooks.zapier.com/hooks/catch/25458326/ueh3olu/';
    
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

    if (response.ok) {
      return new Response(JSON.stringify({ success: true, message: 'Nomination submitted successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      throw new Error(`Webhook response error: ${response.status}`);
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
