export const environment = {
    mysql: {
        host:'192.168.178.104',
        user:'joom',
        port:'22',
        password:'aj.123',
        database: 'joomla_db',
        commands:{
            restore_joomla:'mysql -ujoom -paj.123 -h192.168.178.104 joomla_db < ./joomla_db.sql',
            backup_joomla:'mysqldump -ujoom -paj.123 -h192.168.178.104 --compact joomla_db > ./joomla_db.sql',
            drop_database: 'mysql -ujoom -paj.123 -h192.168.178.104 -e "DROP DATABASE IF EXISTS joomla_db;"',
            create_database: 'mysql -ujoom -paj.123 -h192.168.178.104 -e "CREATE DATABASE IF NOT EXISTS joomla_db;"'
        }
    }
}
