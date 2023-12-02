import Importer from 'mysql-import';
const Importer = require('mysql-import');

// Import file to database

function CleanDatabase(dbnew){
  let dbstring: string[] = ["", ""];
}

const host = '192.168.178.104';
const user = 'joom';
const password = 'aj.123';
const database = 'joomla_db';
export async function ImportData(dbNew: string[]){
    await Promise.resolve(CleanDatabase(dbNew)).then(function(){
        const imp = new Importer({host, user, password, database});
        
        try {
            imp.onProgress((progress)=>{
                var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
                console.log(`${percent}% Completed`);
            });
    
            imp.import('./dump.sql').then(()=>{
                var files_imported = imp.getImported();
                console.log(`${files_imported.length} SQL file(s) imported.`);
            }).catch((err: string[]) =>{
                console.error(err);
            });
        } catch (error) {
            return error;
        }
    });
}