import { exec, ChildProcess } from 'child_process';
import { kill } from 'process';


let powershellProcess: ChildProcess | null = null;

export async function PS_Command(command: string) {
    const path_to_mailslurper = 'D:\\projekte\\mailslurper\\';
    let exec_command = '';
    switch (command) {
        case 'start mailslurper':
            console.log('Starting mailslurper');
            exec_command = 'powershell.exe Start-Process -FilePath '+path_to_mailslurper+'mailslurper.exe -passthru -WorkingDirectory '+path_to_mailslurper+';'
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

