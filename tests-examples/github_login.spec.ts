import { test, expect, type Page } from '@playwright/test';
const USER = process.env.GITHUB_USER as string;
const PASSWORD = process.env.GITHUB_PASSWORD as string;

const authFile = 'tests-examples/user.json';

test('@login', async ({ page, request }) => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByLabel('Username or email address').click();
    await page.getByLabel('Username or email address').fill(USER);
    await page.getByLabel('Password').fill(PASSWORD);
    //await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator("input[name='commit']").click();
    await page.getByLabel('Account', { exact: true }).getByLabel('Repositories', { exact: true });
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();  
    await page.context().storageState({ path: authFile });

  });