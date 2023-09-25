import { test, expect, type Page } from '@playwright/test';
const USER = process.env.GITHUB_USER as string;
const PASSWORD = process.env.GITHUB_PASSWORD as string;
const TOTP_SEC = process.env.TOTP as string;

const authFile = 'tests-examples/user.json';

import * as OTPAuth from "otpauth"

let totp = new OTPAuth.TOTP({
  issuer: "ajodochus",
  label: "GitHub",
  algorithm: "SHA1",
  digits: 6,
  period: 30,
  secret: TOTP_SEC,
})

test('2FA', async ({ page, request }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill(USER);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(PASSWORD);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByPlaceholder('XXXXXX').click();
  let sec = totp.generate();
  await page.getByPlaceholder('XXXXXX').fill(sec);
  await page.getByRole('link', { name: 'Dashboard' }).click();
});