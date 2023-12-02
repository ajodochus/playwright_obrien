import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
const authFile = 'tests/authphp.json';




test.use({ storageState: authFile });
test('test', async ({ page }) => {
    await page.goto('http://192.168.178.104/phpMyAdmin/');

    await page.getByRole('link', { name: 'Importieren Importieren' }).click();
    await page.getByLabel('Durchsuchen Sie Ihren Computer: (Maximal: 2.048KiB)').click();

    /*
    await page.getByLabel('Benutzername:').click();
    await page.getByLabel('Benutzername:').fill('phpmyadmin');
    await page.getByLabel('Passwort:').click();
    await page.getByLabel('Passwort:').fill('aj.123');
    await page.getByRole('button', { name: 'Anmeldung' }).click();
    await page.context().storageState({ path: authFile });

    await page.getByRole('link', { name: 'Datenbanken Datenbanken' }).click();
    await page.getByRole('checkbox', { name: 'joomla_db' }).check();
    await page.getByRole('button', { name: 'Löschen Löschen' }).click();
    await page.getByRole('button', { name: 'Löschen', exact: true }).click();
    await page.getByPlaceholder('Datenbankname').click();
    await page.getByPlaceholder('Datenbankname').fill('joomla_db');
    await page.getByRole('button', { name: 'Anlegen' }).click();

*/


    //await page.getByRole('link', { name: 'SQL SQL' }).click();
    //await page.locator('.mb-3 > .CodeMirror > .CodeMirror-scroll').click();

    //const file = readFileSync('./joomla_db.sql', 'utf-8');
   //await page.locator('.mb-3 > .CodeMirror > .CodeMirror-scroll').fill(file.toString());
  // page.evaluate("navigator.clipboard.readText('asfafafasfsdf')");
   //await page.keyboard.press('Control+V');

});