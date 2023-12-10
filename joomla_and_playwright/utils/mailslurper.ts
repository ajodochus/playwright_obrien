import nodemailer from 'nodemailer';
import { exec, spawn } from 'child_process';

const processName = 'mailslurper';
const timeoutDuration = 10000; // 10 seconds

function waitForProcess() {
    const processTimeout = setTimeout(() => {
      console.error(`Timeout: Process '${processName}' did not exist within ${timeoutDuration / 1000} seconds.`);
      process.exit(1); // You can handle this according to your use case
    }, timeoutDuration);
  
    const checkProcess = spawn('tasklist', ['/FI', `IMAGENAME eq ${processName}.exe`]);
  
    checkProcess.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes(processName)) {
        console.log(`Process '${processName}' found!`);
        clearTimeout(processTimeout);
        // Do something when the process is found, e.g., proceed with your logic
      }
    });
  
    checkProcess.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Error checking process. Exit code: ${code}`);
        clearTimeout(processTimeout);
        process.exit(1);
      }
    });
  }

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
const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email.',
};

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

export async function send_email() {
    await sleep(10000);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
}

