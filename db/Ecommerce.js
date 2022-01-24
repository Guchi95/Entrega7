const knex = require('knex')

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/chat.db', sqlite3.OPEN_READWRITE, (err)=> {
if (err) return console.error(err.message);

console.log('Connection to DB successful')
});

knex.schema.createTable('Ecommerce', (table) => {
    table.string ('ProductTitle')
    table.float ('Price')
    table.string ('Thumbnail')
    table.increments('id')
})
.then(()=> console.log('Tabla creada'))
.catch(error => console.log(error)) 

db.run(
    'CREATE TABLE Chat(email, date, msg)'
    );

const sql = 'INSERT INTO Chat(email, date, msg) VALUES(?,?,?)';

db.run(sql,[{email},{date}, {msg}], (err)=> {
    if (err) return console.error(err.message);
    
    console.log("A new row has been crated")
});