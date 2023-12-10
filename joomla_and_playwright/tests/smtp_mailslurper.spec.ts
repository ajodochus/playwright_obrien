import { PS_Command } from "../utils/powershell_handler";
import { test, expect } from '@playwright/test';
import { get_all_mails, send_email, delete_all_mails } from "../utils/mailslurper";



// before each test, start mailslurper
test.beforeAll(async () => {
  await PS_Command("start mailslurper");
});

// after each test, stop mailslurper
test.afterAll(async () => {
  //await PS_Command("stop mailslurper");
});

test.skip('send first mail', async ({ page }) => {
  test.info().annotations.push({ type: 'email', description: 'first message' });
  await send_email({ from: 'test@test.de', to: 'to@test.de', subject: 'my first subject', text: 'This is my first text' });
});

test('send 2nd mail', async ({ page }) => {
  test.info().annotations.push({ type: 'email', description: '2nd message' });
  await send_email({ from: 'test@test.de', to: 'to@test.de', subject: '2ndsubject', text: 'this is my 2nd text' });
  await get_all_mails();
  await delete_all_mails();
});