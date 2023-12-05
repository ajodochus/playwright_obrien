import { test, expect } from '@playwright/test';
import { executeSSH } from '../utils/SshHelper';
import { environment } from '../utils/Environment';




  test('@backup joomla database', async ({ page }) => {
    console.log(await executeSSH(environment.mysql.commands.backup_joomla));
  });

  test('@restore joomla database', async ({ page }) => {
    const executeCommands = async () => {
      const commands = [
        environment.mysql.commands.backup_joomla
    
        //environment.mysql.commands.drop_database,
        //environment.mysql.commands.create_database,
        //environment.mysql.commands.restore_joomla
      ];
    
      for (const command of commands) {
        console.log(await executeSSH(command));
      }
    };
    
    //executeCommands();
  });