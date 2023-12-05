import { gvars } from './../utils/Environment';
import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { language as lng } from '../utils/language_table';
const authFile = 'tests/auth.json';

let baseURL = gvars.baseurl_joomla_fe_en;
const language = process.env.LANGUAGE as string;

switch (language) {
case 'de-DE':
    console.log('de-DE');
    baseURL = gvars.baseurl_joomla_fe_de;
    break;
case 'en-GB':
    console.log('en-GB');
    baseURL = gvars.baseurl_joomla_fe_en;
    break;
default:
    console.log(`Please provide a correct environment value like "npx cross-env ENV=qa|dev|qaApi|devApi"`);
    process.exit();
}

export async function login_to_frontend(page: Page) {
    await page.goto(baseURL);
    //await page.getByPlaceholder(lng.frontend.loginpage.user[language]).click();
    await page.locator('[name=username]').click();
    await page.locator('[name=username]').fill('joomla');
    await page.locator('[name=password]').click();
    await page.locator('[name=password]').fill('joomla.12345');
    await page.locator('button[type=submit]').click();
    await page.context().storageState({ path: authFile });
    await page.locator('//div[@class="mod-login-logout__button logout-button"]/button').click();
    expect (await page.locator('//div[@class="alert-message"]')).toContainText(lng.frontend.loginpage.successfully_loged_out[language]);
    await page.locator('button[class=joomla-alert--close]').click();
    await expect(page.locator('#system-message-container')).toBeHidden();
    await page.context().storageState({ path: authFile });

};