import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, product, age, address, pincode } = body || {};

    if (!name || !phone || !product || !age || !address || !pincode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get IP address from request headers
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const ip = forwarded ? forwarded.split(",")[0] : realIp || "Unknown";

    // Try to get location from IP (using ipapi.co free API)
    let location = "Location not available";
    try {
      if (ip === "::1" || ip.startsWith("127.")) {
        location = "Localhost (Local Development)";
      } else if (ip !== "Unknown") {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          location = `${geoData.city || "Unknown"}, ${geoData.region || ""}, ${geoData.country_name || "Unknown"}`;
        }
      }
    } catch (geoErr) {
      // Silently fail if geolocation lookup fails
      console.log("Geolocation lookup failed:", geoErr);
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const subject = `New Service Request - 24x7 Repair Services`;
    const text = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product: ${product}`,
      `Product Age: ${age}`,
      `Address: ${address}`,
      `Pincode: ${pincode}`,
      ``,
      `-- Technical Info --`,
      `IP Address: ${ip}`,
      `Location: ${location}`,
      `Time: ${new Date().toLocaleString()}`,
    ].join("\n");

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Service Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f3f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f3f0; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                🔧 New Service Request - 24x7 Repair Services
              </h1>
            </td>
          </tr>
          
          <!-- Customer Information Section -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Customer Information</h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 10px 0;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">Name:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
                      </tr>
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">Phone:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                          <a href="tel:${phone}" style="color: #10b981; text-decoration: none; font-weight: 600;">${phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">Service:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${product}</td>
                      </tr>
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">Product Age:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${age}</td>
                      </tr>
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">Address:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0; border-bottom: 1px solid #e5e5e5;">${address}</td>
                      </tr>
                      <tr>
                        <td width="35%" style="color: #525252; font-weight: 600; font-size: 14px; padding: 12px 0;">Pincode:</td>
                        <td style="color: #1a1a1a; font-size: 14px; padding: 12px 0;">${pincode}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Request Details Section -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Request Details</h2>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 10px 0;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #525252; font-size: 13px; padding: 8px 0;">
                          <strong>Submitted At:</strong> ${new Date().toLocaleString("en-US", { 
                            weekday: "long", 
                            year: "numeric", 
                            month: "long", 
                            day: "numeric", 
                            hour: "2-digit", 
                            minute: "2-digit",
                            second: "2-digit"
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #525252; font-size: 13px; padding: 8px 0;">
                          <strong>IP Address:</strong> ${ip}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #525252; font-size: 13px; padding: 8px 0;">
                          <strong>Location:</strong> ${location}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f3f0; padding: 20px; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; color: #737373; font-size: 12px;">
                This is an automated notification from your 24x7 Repair Services website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await transporter.sendMail({
      from: user,
      to: user,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
