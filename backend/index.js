const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Gmail transporter using App Password (set GMAIL_USER and GMAIL_PASS in .env)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'anshulkumbhkar2005@gmail.com',
    pass: process.env.GMAIL_PASS, // Gmail App Password (not your login password)
  },
});

app.get('/', (req, res) => {
  res.send('Anshul Kumaar & co. API is running');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submission received:');
  console.log(`Name: ${name}, Email: ${email}`);
  console.log(`Message: ${message}`);

  // Only attempt to send if GMAIL_PASS is configured
  if (process.env.GMAIL_PASS) {
    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.GMAIL_USER}>`,
        to: 'anshulkumbhkar2005@gmail.com',
        replyTo: email,
        subject: `New Contact: ${name} from ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#fff;border-radius:16px;">
            <h2 style="color:#a78bfa;margin-bottom:24px;">📬 New Contact Form Submission</h2>
            <p><strong style="color:#fff;">Name:</strong> <span style="color:#ccc;">${name}</span></p>
            <p><strong style="color:#fff;">Email:</strong> <span style="color:#ccc;">${email}</span></p>
            <hr style="border:1px solid #333;margin:20px 0;" />
            <p><strong style="color:#fff;">Message:</strong></p>
            <p style="color:#ccc;white-space:pre-wrap;">${message}</p>
            <hr style="border:1px solid #333;margin:20px 0;" />
            <small style="color:#666;">Sent from anshulkumaar.co contact form</small>
          </div>
        `,
      });
      console.log('Email sent successfully.');
    } catch (err) {
      console.error('Failed to send email:', err.message);
      // Still return success to user; don't expose internal errors
    }
  } else {
    console.warn('GMAIL_PASS not set in .env — email not sent. Add it to enable email delivery.');
  }

  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
