import { exec, ChildProcess } from 'child_process';
import path from 'path';
import { kill } from 'process';

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
let powershellProcess: ChildProcess | null = null;

export async function PS_Command(command: string) {
  const executionDirectory = path.resolve(__dirname); 
  const path_to_mailslurper = '/mailslurper/';
  const fullPathToMailslurper = path.join(executionDirectory, path_to_mailslurper);
  //const temp_path_to_mailslurper = 'D:\\projekte\\mailslurper_\\';
  console.log('exec dir: ' + executionDirectory);
  let exec_command = '';
  switch (command) {
    case 'start mailslurper':
      console.log('Starting mailslurper');
      exec_command = 'powershell.exe Start-Process -FilePath ' + fullPathToMailslurper + 'mailslurper.exe -passthru -WorkingDirectory ' + fullPathToMailslurper + ';'   
      break;
    case 'stop mailslurper':
      console.log('Stopping mailslurper');
      exec_command = 'powershell.exe Stop-Process -Name \'mailslurper\';';
      break;
    default:
      exec_command = 'powershell.exe ipconfig';
      break;
  }

  powershellProcess = exec(exec_command);

  powershellProcess.stdout?.on('data', (data) => {
    console.log(`Powershell stdout: ${data}`);
  });

  powershellProcess.stderr?.on('data', (data) => {
    console.error(`Powershell stderr: ${data}`);
  });

  powershellProcess.on('close', (code) => {
    console.log(`Powershell process exited with code ${code}`);
  });
}

