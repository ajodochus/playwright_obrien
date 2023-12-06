import { test, expect } from '@playwright/test';
import { change_site_language, login_admin } from '../modules/admin_modules';
import { login_to_frontend, count_table_rows } from '../modules/frontend_modules';
import { log } from 'console';
import { repo } from '../utils/Repo';

const authFile = 'tests/auth.json';
// joomla running on proxmox 104

test('test', async ({ page }) => {
  await login_to_frontend(page);
  await count_table_rows(page, repo.table1.table_one);
});
test.skip('login frontend', async ({ page }) => {
  await login_to_frontend(page);
});

test.skip('login admin', async ({ page }) => {
  await login_admin(page);
  await change_site_language(page);

});