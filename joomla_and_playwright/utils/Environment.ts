import { language } from './language_table';
const decompress = require("decompress");

export const environment = {
    mysql: {
        host: '192.168.178.104',
        user: 'joom',
        port: '22',
        password: 'aj.123',
        database: 'joomla_db',
        commands: {
            restore_joomla: 'mysql -ujoom -paj.123 -h192.168.178.104 joomla_db < ./joomla_db.sql',
            backup_joomla: 'mysqldump -ujoom -paj.123 -h192.168.178.104 --compact joomla_db > ./joomla_db.sql',
            drop_database: 'mysql -ujoom -paj.123 -h192.168.178.104 -e "DROP DATABASE IF EXISTS joomla_db;"',
            create_database: 'mysql -ujoom -paj.123 -h192.168.178.104 -e "CREATE DATABASE IF NOT EXISTS joomla_db;"'
        }
    }
}

export const gvars = {
    baseurl_joomla_fe_de: 'http://192.168.178.104/joomla/index.php/de',
    baseurl_joomla_fe_en: 'http://192.168.178.104/joomla/index.php/en',
    baseurl_joomla_be: 'http://192.168.178.104/joomla/administrator/'
}

export function get_locale() {
    const language = process.env.LANG?.split('.')[0];
    return language as string;
}

export const table1_expected_values = {

    'de-DE': [
        ['header1', 'header2', 'header3', 'header4', 'header5'],
        ['11', '12', '13', '14', '15'],
        ['21', '22', '23', '24', '25'],
        ['31', '32', '33', '34', '35']
    ],
    'en-GB': [
        ['header1', 'header2', 'header3', 'header4', 'header5'],
        ['11', '12', '13', '14', '15'],
        ['21', '22', '23', '24', '25'],
        ['31', '32', '33', '34', '35']
    ]

}


export function unzipFile(filePath: string, destinationPath: string) {
    decompress(filePath, destinationPath)
    .then((files) => {
      console.log(files);
    })
    .catch((error) => {
      console.log(error);
    });
}





