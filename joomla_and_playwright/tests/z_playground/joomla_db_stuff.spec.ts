import { test, expect } from '@playwright/test';
import * as mysql from 'mysql2/promise';
import * as fs from 'fs';

var fp  = './dump.sql';
  //const sql = fs.readFileSync(fp, 'utf8');
async function connectToDatabase() {

  
  try {

    const connection = await mysql.createConnection({
        host: '192.168.178.104',
        user: 'joom',
        password: 'aj.123',
        //database: 'joomla_db'
    });

    console.log('Connected to MySQL database!');

    // Now you can execute queries using the 'connection' object.

    // Example query:
    //const [rows, fields] = await connection.execute('SELECT * FROM jml_action_logs');
    //console.log('Query Result:', rows);
    //const drop_db = await connection.execute('DROP DATABASE joomla_db');
    //const create_db = await connection.execute('CREATE DATABASE IF NOT EXISTS joomla_db');
    await connection.execute("mysqlpump joomla_db < ${./dump.sql}");
    //console.log(create_db.toString());
    //await connection.query(sql);

    // Don't forget to close the connection when done.
    await connection.end();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
}

connectToDatabase();



test('test', async ({ page }) => {
    // test something
   });
