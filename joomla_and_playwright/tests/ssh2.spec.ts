import { test, expect } from '@playwright/test';
import SshConnection from '../utils/SshConnection';

// Replace these values with your remote server details
const remoteServer = {
  host: '192.168.178.104',
  port: 22, // default SSH port
  username: 'ajodochus',
  password: 'aj.123',
};

// Replace this value with your shell command
const commandToExecute = 'ifconfig';

// Create an instance of SshConnection
const sshConnection = new SshConnection(remoteServer);

// Connect to the remote server
sshConnection
  .connect()
  .then(() => {
    // Execute the shell command
    return sshConnection.executeCommand(commandToExecute);
  })
  .then((result) => {
    console.log(`Command output:\n${result.output}`);
  })
  .catch((err) => {
    console.error('Error:', err);
  })
  .finally(() => {
    // Close the SSH connection
    sshConnection.end();
  });



test('test', async ({ page }) => {
 // test something
});