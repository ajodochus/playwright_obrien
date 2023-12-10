//import { language } from './../utils/language_table';
import { test, expect } from '@playwright/test';
import { change_site_language, login_admin } from '../modules/admin_modules';
import { login_to_frontend, create_a_listarray_from_a_table, compare_2_tables, powershell_exec, start_mailslurpter } from '../modules/frontend_modules';
import { log } from 'console';
import { repo } from '../utils/Repo';
import { table1_expected_values, gvars } from '../utils/Environment';
import { PS_Command } from '../utils/powershell_handler';
const language = process.env.LANGUAGE as string;
// Start the Powershell process



//powershell_exec('');

test('test', async ({ page }) => {
    test.info().annotations.push({ type: 'group', description: 'frontend' });
    //await login_to_frontend(page);
    await page.goto(gvars.baseurl_joomla_fe_en);
    const table1_content: string[][] = await create_a_listarray_from_a_table(page, repo.table1.table_one);
    const difference_found = compare_2_tables(table1_content, table1_expected_values[language]);
    //expect (difference_found).toBe(0) else print the difference
    expect(difference_found.length).toBe(0);
  });


