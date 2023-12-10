import nodemailer from 'nodemailer';
import { exec, spawn } from 'child_process';
import { APIRequestContext } from '@playwright/test';
import exp from 'constants';
import anxios from 'axios';
const processName = 'mailslurper';
const timeoutDuration = 10000; // 10 seconds

// api: https://github.com/mailslurper/mailslurper/wiki/API-Guide

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
  await sleep(10000);
}


// Import the axios library
import axios from 'axios';

// Define the API endpoint URL
const apiUrl =  'http://127.0.0.1:8085/mail';
// Define the data you want to send in the request body
const requestData = {
  'pruneCode': 'all'
};

// Use async/await to make the request
export async function delete_all_mails() {
  axios.delete(apiUrl, { data: requestData })
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
}

export async function get_all_mails() {
  axios.get(apiUrl)
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
}