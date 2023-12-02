
let Client = require('ssh2-sftp-client');
let sftp = new Client();
 sftp.connect({
    host: '192.168.178.104',
    port: '22',
    username: 'ajodochus',
    password: 'aj.123'
}).then(() => {
    return sftp.list('/var/www/html/joomla/language/');
}).then((data) => {
    console.log(data, '  naaaaaaaaame');
    return data;
  }).then( (data) => {
   // console.log(data[0].name, ' data');
   /*
     data.forEach(x  => {
        let remoteFilePath = '/var/www/html/joomla/tmp/' + x.name;
        sftp.get(remoteFilePath).then((stream) => {
            // save to local folder ftp
            let file = './ftp/' + x.name;
            fs.writeFile(file, stream, (err) => {
                if (err) console.log(err);
            });
        });
    });
    */
}).catch((err) => {
    console.log(err, 'catch error');
});