import { PS_Command } from "../utils/powershell_handler";
import { test, expect } from '@playwright/test';
import { send_email } from "../utils/mailslurper";




test('test', async ({ page }) => {
  test.info().annotations.push({ type: 'email', description: 'meilslurper' });
  await PS_Command("start mailslurper");
  await send_email({ from: 'test@test.de', to: 'to@test.de', subject: 'my subject', text: 'This is a new text' });
  await PS_Command("stop mailslurper");
});