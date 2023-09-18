const authFile = 'tests-examples/user.json';
import { test, expect, type Page } from '@playwright/test';
const repo = process.env.REPO as string;
const user = process.env.USER as string;
test.use({ storageState: "tests-examples/user.json" });
test('set report 1 bug to closed', async ({ page, request }) => {
    await page.goto('/' + user +'/' + repo);
    await page.getByRole('link', { name: 'Issues Issues' }).click();
    await page.getByPlaceholder('Search all issues').click();
    await page.getByPlaceholder('Search all issues').press('Control+a');
    await page.getByPlaceholder('Search all issues').fill('is:issue is:closed');
    await page.getByPlaceholder('Search all issues').press('Enter');
    await page.getByLabel('[Bug] report 1', { exact: true }).check();
});