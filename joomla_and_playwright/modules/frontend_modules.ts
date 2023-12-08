import { gvars } from './../utils/Environment';
import { Page } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { language as lng } from '../utils/language_table';
const authFile = 'tests/auth.json';

let baseURL = gvars.baseurl_joomla_fe_en;
const language = process.env.LANGUAGE as string;

switch (language) {
  case 'de-DE':
    console.log('de-DE');
    baseURL = gvars.baseurl_joomla_fe_de;
    break;
  case 'en-GB':
    console.log('en-GB');
    baseURL = gvars.baseurl_joomla_fe_en;
    break;
  default:
    console.log(`Please provide a correct environment value like "npx cross-env ENV=qa|dev|qaApi|devApi"`);
  //process.exit();
}

export async function login_to_frontend(page: Page) {
  await page.goto(baseURL);
  //await page.getByPlaceholder(lng.frontend.loginpage.user[language]).click();
  await page.locator('[name=username]').click();
  await page.locator('[name=username]').fill('joomla');
  await page.locator('[name=password]').click();
  await page.locator('[name=password]').fill('joomla.12345');
  await page.locator('button[type=submit]').click();
  await page.context().storageState({ path: authFile });
  await page.locator('//div[@class="mod-login-logout__button logout-button"]/button').click();
  expect(await page.locator('//div[@class="alert-message"]')).toContainText(lng.frontend.loginpage.successfully_loged_out[language]);
  await page.locator('button[class=joomla-alert--close]').click();
  await expect(page.locator('#system-message-container')).toBeHidden();
  await page.context().storageState({ path: authFile });

};

export async function create_a_listarray_from_a_table(page: Page, locator: string) {
  let listofarrays: string[][] = [];
  const tableContents = await page.$$eval(`${locator}/tr`, (rows) =>
    rows.map((row) =>
      Array.from(row.querySelectorAll('td, th'), (cell) => cell.textContent?.trim())
    )
  );
  console.log(tableContents);
  tableContents.forEach((row) => {
    listofarrays.push(row as string[]);

    //console.log('column1: ' + row[0]);
    /*
    row.forEach(element => {
       // console.log(element);
    });
    */
  });
  console.log(listofarrays);
  return listofarrays;
};

export function compare_2_tables(arr1: string[][], arr2: string[][]) {
  let found_diff = false;
  // declare a array list of arrays   
  let arraylist: string[][] = [];

  //let arr1 = [['a', 'b'], ['c', 'd'], ['e', 'f']];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        found_diff = true;
        arraylist.push(['Difference at position: ' + i.toString() + "/" + j.toString()], [arr1[i][j], arr2[i][j]]);
      }
    }
  }
  if (found_diff) {
    console.log('Found differences');
    console.log(arraylist.length);
  } else {
    console.log('No differences found');
    console.log(arraylist.length);
  }
  return arraylist;
}


