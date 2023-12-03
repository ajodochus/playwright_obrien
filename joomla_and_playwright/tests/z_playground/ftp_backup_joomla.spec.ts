import { test, expect } from '@playwright/test';
import {lang} from '../utils/languagetable';
import fs from 'fs';
const url_base = process.env.URL_BASE as string ;
const url_fe = process.env.URL_FE as string 
const url_frontend = url_base + url_fe;

const authFile = 'authFile.json';
const lang_to_test = "de";


// https://www.npmjs.com/package/node-scp

//const { Client } = require('node-scp')
//with ES Module
import { Client } from 'node-scp'


Client({
  host: '192.168.178.104',
  port: 22,
  username: 'ajodochus',
  password: 'aj.123',
}).then(client => {
  client.downloadDir('/var/www/html/joomla/administrator/', './ftp/')
        .then(response => {
          client.close() // remember to close connection after you finish
        })
        .catch(error => {})
}).catch(e => console.log(e))

/*
async function aaa() {
  try {
    const client = await Client({
        host: '192.168.178.104',
        port: 22,
        username: 'ajodochus',
        password: 'aj.123',
    })
    await client.downloadDir('/var/www/html/joomla/administrator/', './ftp/');
    client.close(); // remember to close connection after you finish
  } catch (e) {
    console.log(e);
  }
}

aaa()
*/

      









test('login as user1 and store session', async ({ page }) => {
  await page.goto(url_frontend);
  //await page.getByPlaceholder(lang("loginform","username","de")).click();
 
  await page.getByPlaceholder(testdata.loginform.username['de']).fill(process.env.USER_USER1 as string);
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

