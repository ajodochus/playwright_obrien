import nodemailer from 'nodemailer';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8085/mail';
const processName = 'mailslurper';
const timeoutDuration = 10000; // 10 seconds

// api: https://github.com/mailslurper/mailslurper/wiki/API-Guide
// cheat sheet: https://quickref.me/vscode.html


const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 587,
  secure: false, // Set to true if using a secure connection (e.g., port 465)
  auth: {
    user: 'test',
    pass: 'test.123',
  },
});

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  console.log('waiting for mailslurper to receive email...');
  await sleep(timeoutDuration);
}

const requestData = {
  'pruneCode': 'all'
};

export async function delete_all_mails() {
  try {
    const response = await axios.delete(apiUrl, { data: requestData });
    console.log('deleted mails: ' + response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function get_subject_from_first_mail() {
  try {
    const response = await axios.get(apiUrl);
    const result = response.data;
    const subject = result.mailItems[0].subject;
    return subject;
  } catch (error) {
    console.error(error);
  }
}


