import { test, expect } from '@playwright/test';
import mysqldump from 'mysqldump';

import * as fs from 'fs';
import * as mysql from 'mysql2/promise';

const host = '192.168.178.104';
const user = 'joom';
const password = 'aj.123';
const database = 'joomla_db';

const Importer = require('mysql-import');

const importer = new Importer({host, user, password, database});

importer.onProgress(progress=>{
  var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import('./joomla_db.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
});





const mysqlConfig: mysql.PoolOptions = {
    host: '192.168.178.104',
    user: 'joom',
    password: 'aj.123',
    database: "joomla_db"
};

async function importSQLFromFile(filePath: string): Promise<void> {
  try {
    // Read SQL dump file
    const sqlStatement = fs.readFileSync(filePath, 'utf8');

    // Create a MySQL connection pool
    const pool = mysql.createPool(mysqlConfig);

    // Get a connection from the pool
    const connection = await pool.getConnection();

    try {
      // Execute the SQL statement
      await connection.query(sqlStatement);
      console.log('SQL statement imported successfully!');
    } finally {
      // Release the connection back to the pool
      connection.release();
    }
  } catch (error) {
    console.error('Error importing SQL statement:', error);
  }
}
const sqlDumpFilePath = './dump_.sql';
//importSQLFromFile(sqlDumpFilePath);



/*
mysqldump({
    connection: {
        host: '192.168.178.104',
        user: 'joom',
        password: 'aj.123',
        database: 'joomla_db',
    },
    dumpToFile: './dump_.sql',
});
*/

test('test', async ({ page }) => {
    // test something
   });