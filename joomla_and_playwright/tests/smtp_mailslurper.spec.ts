import { PS_Command } from "../utils/powershell_handler";
import { test, expect } from '@playwright/test';
import { get_subject_from_first_mail, send_email, delete_all_mails } from "../utils/mailslurper";
import { unzipFile } from "../utils/Environment";
import path from "path";



  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  // before each test, start mailslurper
  test.beforeAll(async () => {
    await unzipFile(path.join(__dirname, '../utils/mailslurper/mailslurper.zip'), path.join(__dirname, '../utils/mailslurper'));
    await sleep(5000);
    await PS_Command("start mailslurper");
    await sleep(5000);
  });

// after each test, stop mailslurper
test.afterAll(async () => {
  await PS_Command("stop mailslurper");
  await sleep(5000);
});

test.skip('send first mail', async ({ page }) => {
  test.info().annotations.push({ type: 'email', description: 'first message' });
  await send_email({ from: 'test@test.de', to: 'to@test.de', subject: 'my first subject', text: 'This is my first text' });
});

test('send 2nd mail', async ({ page }) => {
  test.info().annotations.push({ type: 'email', description: '2nd message' });
  await send_email({ from: 'test@test.de', to: 'to@test.de', subject: '2ndsubject', text: 'this is my 2nd text' });
  await sleep(5000);
  console.log(await get_subject_from_first_mail());
  const subject = await get_subject_from_first_mail();
  await (expect(subject).toBe('2ndsubject'));
  await delete_all_mails();
});