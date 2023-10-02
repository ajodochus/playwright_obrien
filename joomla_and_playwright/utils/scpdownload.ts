const scp = require('node-scp')
//var fs = require('fs');
var remote_server = {
  host: '192.168.178.104', //remote host ip 
  port: 22, //port used for scp 
  username: 'ajodochus', //username to authnticate
  password: 'aj.123', //password to authenticate
  // forceIPv4: boolean,  //Connection allow only via resolved IPv4 address (true/false)
  // forceIPv6: boolean,  //Connection allow only via resolved IPv6 address (true/false)
  // privateKey: fs.readFileSync('./key.pem'),
  // passphrase: 'your key passphrase', 
}

var local_file_path = './ftp/test';
var detination_file_path = '/var/www/html/joomla/language/';
download_file_using_promise(detination_file_path, local_file_path);
function download_file_using_promise(file_path, destination_path){
    scp(remote_server).then(client => {
        client.downloadDir(file_path, destination_path)
              .then(response => {
                client.close()
              })
              .catch(error => {})
      }).catch(e => console.log(e))
}