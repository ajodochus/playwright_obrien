import { test, expect } from '@playwright/test';
import {lang} from '../utils/languagetable';
const url_base = process.env.URL_BASE as string ;
const url_fe = process.env.URL_FE as string 
const url_frontend = url_base + url_fe;

const authFile = 'authFile.json';

test('login as user1 and store session', async ({ page }) => {
  await page.goto(url_frontend);
  await page.getByPlaceholder(lang("loginform","username","de")).click();
  await page.getByPlaceholder('Benutzername').fill(process.env.USER_USER1 as string);
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill(process.env.PASSWORD_USER1 as string);
  await page.locator('button:has-text("Anmelden")').click();
  //await page.locator('button[name="Anmelden"]').click();
  //await page.getByRole('link', { name: 'Nav 1 (eng)' }).click();
  //await page.getByText('Abmeldung erfolgreich.').
  await page.locator('button:has-text("Abmelden")').click();
  await expect(page.getByText('Abmeldung erfolgreich.')).toBeVisible();

  await page.context().storageState({ path: authFile });
});

