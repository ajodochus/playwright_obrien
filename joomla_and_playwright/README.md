

pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {

                sh script:'''
                  #!/bin/bash
                  sudo unzip -o /home/ajodochus/jenkins/joomla_bu/joomla.zip -d /var/www/html/joomla
                  sudo mysql -u joomlauser -psecurepassword joomla_db < joomla_dump.sql
                '''
            }
        }
    }
}



Testing Joomla on VBox "Ubuntu"...
- joomla running on standard port
- <ip_joomla>/joomla for frontend
- <ip_joomla>/joomla/administrator for admin / backend
- passwords see .env

# sftp
npm install ssh2-sftp-client@^8.0.0
npm install


joomla dump
sudo mysqldump -u joomlauser -p joomla_db --no-tablespaces > /home/ajodochus/jenkins/joomla_bu/joomla_dump.sql

sudo systemctl start mysql   