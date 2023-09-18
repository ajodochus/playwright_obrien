import { test, expect, type Page } from '@playwright/test';
const USER = process.env.USER as string;
const PASSWORD = process.env.PASSWORD as string;

const authFile = 'tests-examples/user.json';

test('@login', async ({ page, request }) => {
  test.setTimeout(30000);
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByLabel('Username or email address').click();
    await page.getByLabel('Username or email address').fill(USER);
    await page.getByLabel('Password').fill(PASSWORD);
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByLabel('Account', { exact: true }).getByLabel('Repositories', { exact: true });
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();  
    await page.context().storageState({ path: authFile });
  });