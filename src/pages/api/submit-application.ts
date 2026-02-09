// Handle preflight OPTIONS requests
export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
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
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Validate all required fields (handle both Smart Start and Contact forms)
    let requiredFields = [];
    
    // Check if this is a Smart Start nomination or Contact form
    if (data.theirName) {
      // Smart Start nomination form
      requiredFields = [
        'yourName',
        'yourEmail',
        'yourPhone',
        'hearAbout',
        'theirName',
        'theirCity',
        'howKnowThem',
        'whyNominating',
        'privacyConsent'
      ];
    } else {
      // Contact form
      requiredFields = [
        'name',
        'email',
        'phone',
        'servicesNeeded',
        'privacyConsent'
      ];
    }

    for (const field of requiredFields) {
      if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            message: `Missing required field: ${field}` 
          }),
          { 
            status: 400,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
      }
    }

    // Enhance metadata from request headers (server-side detection)
    if (!data.metadata) {
      data.metadata = {};
    }

    // Get client IP from various possible headers (for server-side IP detection)
    const clientIp = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      'unknown';

    if (!data.metadata.ipAddress) {
      data.metadata.ipAddress = clientIp;
    }

    // Log metadata being sent
    console.log('[v0] Metadata to be sent:', {
      ip: data.metadata.ipAddress,
      country: data.metadata.country,
      region: data.metadata.region,
      zipCode: data.metadata.zipCode
    });

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
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
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
          message: 'Failed to submit nomination to Zapier' 
        }),
        { 
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    console.log('[v0] Successfully submitted to Zapier');
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Nomination submitted successfully' 
      }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('[v0] API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Always return valid JSON with CORS headers
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: message 
      }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}
