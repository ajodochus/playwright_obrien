const { exec } = require('child_process');
import { test, expect } from '@playwright/test';


// Where would the file be located?
let dumpFile = './dump_2.sql';	


// Database connection settings.
let exportFrom = {
	host: "192.168.178.104",
	user: "joom",
	password: "aj.123",
	database: "joomla_db"
}
let importTo = {
	host: "192.168.178.104",
	user: "joom",
	password: "aj.123",
	database: "test"
}

console.log(`Starting exporting data from the ${exportFrom.database} database`);

// Execute a MySQL Dump and redirect the output to the file in dumpFile variable.
exec(`mysqldump -u${exportFrom.user} -p${exportFrom.password} -h${exportFrom.host} --compact ${exportFrom.database} > ${dumpFile}`, (err, stdout, stderr) => {
	if (err) { console.error(`exec error: ${err}`); return; }
	
	console.log(`Now, importing data to the ${importTo.database} database`);
    
	// Import the database.
	exec(`mysqldump -u${importTo.user} -p${importTo.password} -h${importTo.host} ${importTo.database} < ${dumpFile}`, (err, stdout, stderr) => {
        if (err) { console.error(`exec error: ${err}`); return; }

        console.log(`The import has finished.`);
	});

});

test('test', async ({ page }) => {
    // test something
   });