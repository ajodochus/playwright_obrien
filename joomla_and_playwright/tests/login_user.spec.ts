import { test, expect } from '@playwright/test';

const authFile = 'authFile.json';
test.use({
  baseURL: process.env.URL_JOOMLA_FE as string
});

test('login as user1 and store session', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(process.env.USER_USER1 as string);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD_USER1 as string);
  await page.locator('button[name="Submit"]').click();
  await page.getByRole('link', { name: 'Nav 1 (eng)' }).click();
  await page.context().storageState({ path: authFile });
});

