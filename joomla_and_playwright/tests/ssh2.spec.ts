import { test, expect } from '@playwright/test';
import { executeSSH } from '../utils/SshHelper';
const commandToExecute = 'mysqldump -ujoom -paj.123 -h192.168.178.104 --compact joomla_db < ./dump_3.sql';

(async () => console.log(await executeSSH('ls -al')))();



test('test', async ({ page }) => {
 // test something
});