import { test, expect } from '@playwright/test';
import { language as lng } from '../utils/language_table';
import { get_locale, gvars } from '../utils/Environment';
import { change_site_language, login_admin } from '../modules/admin_modules';
import { login_to_frontend } from '../modules/frontend_modules';
const authFile = 'tests/auth.json';
// joomla running on proxmox 104


test('test', async ({ page }) => {
  await login_to_frontend(page);
  
});

test.skip('login admin', async ({ page }) => {
  await login_admin(page);
  await change_site_language(page);

});