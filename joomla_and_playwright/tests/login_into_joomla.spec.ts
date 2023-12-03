import { test, expect } from '@playwright/test';
import { language as lng } from '../utils/language_table';
import { gvars } from '../utils/Environment';
const authFile = 'tests/auth.json';
// joomla running on proxmox 104


test('test', async ({ page }) => {
  await page.goto(gvars.baseurl_joomla_fe);
  await page.getByPlaceholder(lng.frontend.loginpage.user[lng.lang_to_test]).click();
  await page.locator('[name=username]').fill('joomla');
  await page.locator('[name=password]').click();
  await page.locator('[name=password]').fill('joomla.12345');
  await page.locator('button[type=submit]').click();
  await page.context().storageState({ path: authFile });
  await page.locator('//div[@class="mod-login-logout__button logout-button"]/button').click();
  expect (await page.locator('//div[@class="alert-message"]')).toContainText(lng.frontend.loginpage.successfully_loged_out[lng.lang_to_test]);
  await page.locator('button[class=joomla-alert--close]').click();
  await expect(page.locator('#system-message-container')).toBeHidden();
  await page.context().storageState({ path: authFile });
});
