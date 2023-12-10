import { gvars } from './../utils/Environment';
import { Page } from '@playwright/test';


export async function change_site_language(page: Page) {

  await page.locator('//a[@href="index.php?option=com_cpanel&view=cpanel&dashboard=system"]').click();//href=""
  await page.locator('//a[@href="index.php?option=com_config"]').click();// Konfiguration

  await page.getByRole('link', { name: 'Sprachen' }).click();
  await page.getByRole('button', { name: 'Schließen', exact: true }).click();
  await page.getByLabel('English (United Kingdom)').check();
  await page.getByRole('button', { name: 'Standard' }).click();
}

export async function login_admin(page: Page) {
  await page.goto(gvars.baseurl_joomla_be);
  await page.locator('[name=username]').click();
  await page.locator('[name=username]').fill('joomla');
  await page.locator('[name=passwd]').click();
  await page.locator('[name=passwd]').fill('joomla.12345');
  await page.locator('button[type=submit]').click();
}