import { test, expect } from '@playwright/test';

test.use({
  baseURL: process.env.URL_JOOMLA_FE
});

test('login as user1 and store session', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.USER_USER1 as string);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD_USER1 as string);
  await page.locator('button[name="Submit"]').click();
  await page.getByRole('link', { name: 'Nav 1 (eng)' }).click();
});

