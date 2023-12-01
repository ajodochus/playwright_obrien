import * as mysql from 'mysql2/promise';

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: '192.168.178.104',
      user: 'joomlauser',
      password: 'securepassword',
      database: 'joomla_db',
    });

    console.log('Connected to MySQL database!');

    // Now you can execute queries using the 'connection' object.

    // Example query:
    const [rows, fields] = await connection.execute('SELECT * FROM your_table_name');
    console.log('Query Result:', rows);

    // Don't forget to close the connection when done.
    await connection.end();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
}

connectToDatabase();
