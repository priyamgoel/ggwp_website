import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Log the submission (useful for debugging in Vercel logs)
    console.log("Form submission received:", { name, email, message });
    
    // Configure email transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Define email content
    const mailOptions = {
      from: `"GGWP Team Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    try {
      // Only try to send email if credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Contact form email sent successfully');
      } else {
        console.log('Email credentials not configured, skipping email send');
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We continue processing even if the email fails
    }
    
    // Return success response
    return NextResponse.json({ 
      success: true,
      message: "Form submitted successfully! We'll get back to you soon." 
    });
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}