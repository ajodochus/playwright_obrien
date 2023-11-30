import { Client, ConnectConfig } from 'ssh2';

class SshConnection {
  private remoteServer: ConnectConfig;
  private conn: Client;

  constructor(remoteServer: ConnectConfig) {
    this.remoteServer = remoteServer;
    this.conn = new Client();
  }

  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.conn
        .on('ready', () => {
          console.log('SSH connection established.');
          resolve();
        })
        .on('error', (err) => {
          console.error('Error connecting to remote server:', err);
          reject(err);
        })
        .connect(this.remoteServer);
    });
  }

  public executeCommand(command: string): Promise<{ code: number; signal: string; output: string; errorOutput: string }> {
    return new Promise((resolve, reject) => {
      this.conn.exec(command, (err, stream) => {
        if (err) {
          console.error('Error executing command:', err);
          reject(err);
        }

        let output = '';
        let errorOutput = '';

        stream
          .on('close', (code, signal) => {
            console.log(`Command execution closed with code ${code} and signal ${signal}`);
            resolve({ code, signal, output, errorOutput });
          })
          .on('data', (data) => {
            output += data;
          })
          .stderr.on('data', (data) => {
            errorOutput += data;
          });
      });
    });
  }

  public end(): void {
    this.conn.end();
  }
}

export default SshConnection;
