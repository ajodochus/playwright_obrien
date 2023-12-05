import { test, expect } from '@playwright/test';
import { change_site_language, login_admin } from '../modules/admin_modules';
import { login_to_frontend } from '../modules/frontend_modules';
import { log } from 'console';
import { repo } from '../utils/Repo';

const authFile = 'tests/auth.json';
// joomla running on proxmox 104

test('test', async ({ page }) => {
  await login_to_frontend(page);
 console.log( await page.textContent(repo.homepages.table_one));
});
test.skip('login frontend', async ({ page }) => {
  await login_to_frontend(page);
});

test.skip('login admin', async ({ page }) => {
  await login_admin(page);
  await change_site_language(page);

});