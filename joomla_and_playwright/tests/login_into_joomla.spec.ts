import { test, expect } from '@playwright/test';
const authFile = 'tests/auth.json';
// joomla running on proxmox 104
test('test', async ({ page }) => {
  await page.goto('http://192.168.178.104/joomla/');
  await page.getByPlaceholder('Benutzername').click();
  await page.getByPlaceholder('Benutzername').fill('joomla');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('joomla.12345');
  await page.getByRole('button', { name: 'Anmelden' }).click();
    await page.context().storageState({ path: authFile });

  await page.getByRole('button', { name: 'Abmelden' }).click();
  await page.getByText('Abmeldung erfolgreich.').click();
  await page.context().storageState({ path: authFile });
});