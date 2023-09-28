joomla / joomla.1-5

from
https://www.youtube.com/watch?v=xAHGF2NksI8

Useful Links:
VPS/VDS - https://www.mivocloud.com/
Joomla - https://www.joomla.org/

WARNING - ANGLED BRACKETS AREN'T ALLOWED IN DESCRIPTION SO BE ATTENTIVE TO THE VIDEO IN NANO EDITOR

Commands Used:
apt install apache2 mysql-server php8.1 libapache2-mod-php8.1 php8.1-dev php8.1-bcmath php8.1-intl php8.1-soap php8.1-zip php8.1-curl php8.1-mbstring php8.1-mysql php8.1-gd php8.1-xml unzip -y
php -v

mysql
CREATE DATABASE joomladb;
CREATE USER 'joomlauser'@'localhost' IDENTIFIED BY 'securepassword';
GRANT ALL ON joomladb.* TO 'joomlauser'@'localhost';
FLUSH PRIVILEGES;
EXIT;

wget https://downloads.joomla.org/cms/joom...
unzip Joomla_4-1-2-Stable-Full_Package.zip -d /var/www/html/joomla
chown -R www-data:www-data /var/www/html/joomla/
chmod -R 755 /var/www/html/joomla/

nano /etc/apache2/sites-available/joomla.conf

<VirtualHost *:80>
        ServerName gandom.local
        ServerAlias www.gandom.local
        DocumentRoot /var/www/html/gandom
        <Directory /var/www/html/gandom>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>

ErrorLog ${APACHE_LOG_DIR}/example.com_error.log
CustomLog ${APACHE_LOG_DIR}/example.com_access.log combined

/VirtualHost

a2ensite joomla.conf
systemctl restart apache2
systemctl status apache2