export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
    // Preflight check - only allow requests from same origin
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const allowedOrigin = `${protocol}://${host}`;

    if (origin && origin !== allowedOrigin) {
      return new Response(
        JSON.stringify({ success: false, message: 'CORS policy violation' }),
        { 
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Parse request body with proper error handling
    let data;
    try {
      data = await request.json();
      console.log('[v0] Request parsed successfully');
    } catch (parseError) {
      console.error('[v0] Failed to parse JSON:', parseError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid JSON in request body' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate all required fields
    const requiredFields = [
      'applicantType',
      'fullName',
      'email',
      'phone',
      'address',
      'city',
      'state',
      'zip',
      'whySmartStart',
      'spaceType',
      'privacyConsent'
    ];

    for (const field of requiredFields) {
      if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `Missing required field: ${field}` 
          }),
          { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Get Zapier webhook URL from environment
    const zapierWebhookUrl = import.meta.env.ZAPIER_WEBHOOK_URL;
    
    if (!zapierWebhookUrl) {
      console.error('[v0] ZAPIER_WEBHOOK_URL not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Server configuration error' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Forward to Zapier
    console.log('[v0] Sending to Zapier webhook...');
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    console.log('[v0] Zapier response status:', zapierResponse.status);

    // Check if Zapier response was successful
    if (!zapierResponse.ok) {
      console.error('[v0] Zapier webhook error:', zapierResponse.status);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Failed to submit application to Zapier' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('[v0] Successfully submitted to Zapier');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('[v0] API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Always return valid JSON
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: message 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
