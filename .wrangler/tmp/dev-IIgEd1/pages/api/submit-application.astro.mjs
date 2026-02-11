globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
async function POST({ request, locals }) {
  try {
    let data;
    try {
      data = await request.json();
      console.log("[v0] Request parsed successfully");
    } catch (parseError) {
      console.error("[v0] Failed to parse JSON:", parseError);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid JSON in request body"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    let requiredFields = [];
    if (data.theirName) {
      requiredFields = [
        "yourName",
        "yourEmail",
        "yourPhone",
        "hearAbout",
        "theirName",
        "theirCity",
        "howKnowThem",
        "whyNominating",
        "privacyConsent"
      ];
    } else {
      requiredFields = [
        "name",
        "email",
        "phone",
        "servicesNeeded",
        "privacyConsent"
      ];
    }
    for (const field of requiredFields) {
      if (!data[field] || typeof data[field] === "string" && data[field].trim() === "") {
        return new Response(
          JSON.stringify({
            success: false,
            message: `Missing required field: ${field}`
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }
    }
    if (!data.metadata) {
      data.metadata = {};
    }
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || request.headers.get("cf-connecting-ip") || "unknown";
    if (!data.metadata.ipAddress) {
      data.metadata.ipAddress = clientIp;
    }
    console.log("[v0] Metadata to be sent:", {
      ip: data.metadata.ipAddress,
      country: data.metadata.country,
      region: data.metadata.region,
      zipCode: data.metadata.zipCode
    });
    const zapierWebhookUrl = locals.runtime.env.ZAPIER_WEBHOOK_URL;
    if (!zapierWebhookUrl) {
      console.error("[v0] ZAPIER_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    console.log("[v0] Sending to Zapier webhook...");
    const zapierResponse = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    console.log("[v0] Zapier response status:", zapierResponse.status);
    if (!zapierResponse.ok) {
      console.error("[v0] Zapier webhook error:", zapierResponse.status);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to submit nomination to Zapier"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    console.log("[v0] Successfully submitted to Zapier");
    return new Response(
      JSON.stringify({
        success: true,
        message: "Nomination submitted successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } catch (error) {
    console.error("[v0] API error:", error);
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(
      JSON.stringify({
        success: false,
        message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
