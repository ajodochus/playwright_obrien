import nodemailer from 'nodemailer';
import { exec, spawn } from 'child_process';

const processName = 'mailslurper';
const timeoutDuration = 10000; // 10 seconds


const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 587,
  secure: false, // Set to true if using a secure connection (e.g., port 465)
  auth: {
    user: 'test',
    pass: 'test.123',
  },
});

// Define the email options


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function send_email(mailOptions) {
  if (!mailOptions) {
    mailOptions = {
      from: 'sender@example.com',
      to: 'recipient@example.com',
      subject: 'Test Email',
      text: 'This is a test email.',
    };
  }

  await sleep(10000);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

