import { Client } from 'ssh2';
import { environment as env } from '../utils/Environment';
export function executeSSH(command: string): Promise<string> {
  const config = {
    host: '192.168.178.104',
  port: 22, // default SSH port
  username: 'ajodochus',
  password: 'aj.123',
  };

  return new Promise((resolve, reject) => {
    const conn = new Client();

    conn.on('ready', () => {
      console.log('SSH connection established');

      conn.exec(command, (err, stream) => {
        if (err) {
          conn.end();
          return reject(err);
        }

        let output = '';

        stream
          .on('close', (code, signal) => {
            console.log(`Command execution closed with code ${code} and signal ${signal}`);
            conn.end();
            resolve(output);
          })
          .on('data', (data) => {
            output += data;
          })
          .stderr.on('data', (data) => {
            console.error(`Error output: ${data}`);
          });
      });
    });

    conn.connect(config);
  });


}
