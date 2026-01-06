import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create the transporter using your Gmail configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "bellobambo21@gmail.com",
    pass: process.env.SMTP_PASS || "wexi ugls mrrp hhgq",
  },
  connectionTimeout: 30000,
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📥 Received lead request:", body);

    const {
      name,
      email,
      phone,
      address,
      searchType,
      vehicleInfo,
      tireSize,
      season,
      frontTireSize,
      rearTireSize,
      speedRating,
      loadIndex,
    } = body;

    // 1. Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, and phone" },
        { status: 400 }
      );
    }

    const leadId = Date.now();
    const timestamp = new Date().toLocaleString();

    // 2. Prepare Email Content
    const mailOptions = {
      from: `"TireConnect" <${process.env.SMTP_USER || "didier@mercymobile.tech"}>`,
      to: "didier@mercymobile.tech",
      replyTo: email,
      subject: `New Tire Lead: ${name} (${searchType})`,
      text: `New Tire Lead\n\nCustomer: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${
        address || "Not provided"
      }\n\nSearch Details:\nMode: ${searchType}\nVehicle: ${vehicleInfo}\nTire Size: ${tireSize}\nSeason: ${season}\n\nReceived: ${timestamp}\nLead ID: ${leadId}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #01a2cc; border-bottom: 2px solid #01a2cc; padding-bottom: 10px;">New Tire Lead Registration</h2>
          
          <h3>Customer Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Address:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${address || "Not provided"}</td></tr>
          </table>

          <h3>Search Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Search Mode:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${searchType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Vehicle Info:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${vehicleInfo}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Tire Size:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${tireSize}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Season:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${season}</td></tr>
            ${searchType === "By Tire Size" && frontTireSize ? `<tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Front Tire:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${frontTireSize}</td></tr>` : ""}
            ${searchType === "By Tire Size" && rearTireSize ? `<tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Rear Tire:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${rearTireSize}</td></tr>` : ""}
            ${searchType === "By Tire Size" && speedRating ? `<tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Speed Rating:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${speedRating}</td></tr>` : ""}
            ${searchType === "By Tire Size" && loadIndex ? `<tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Load Index:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${loadIndex}</td></tr>` : ""}
          </table>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              <strong>Lead Received:</strong> ${timestamp}<br>
              <strong>Lead ID:</strong> ${leadId}
            </p>
          </div>
        </div>
      `,
    };

    // 3. Send the Email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully via Nodemailer!");

    return NextResponse.json({
      success: true,
      message: "Lead sent successfully",
      leadId: leadId,
    });

  } catch (error: any) {
    console.error("❌ API Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead" },
      { status: 500 }
    );
  }
}