import { test, expect } from '@playwright/test';
import { change_site_language, login_admin } from '../modules/admin_modules';
import { login_to_frontend, create_a_listarray_from_a_table, compare_2_tables } from '../modules/frontend_modules';
import { log } from 'console';
import { repo } from '../utils/Repo';
import { table1_expected_values } from '../utils/Environment';
const language = process.env.LANGUAGE as string;

const authFile = 'tests/auth.json';
// joomla running on proxmox 104


test.skip('login frontend', async ({ page }) => {
  await login_to_frontend(page);
});

test.skip('login admin', async ({ page }) => {
  await login_admin(page);
  await change_site_language(page);

});