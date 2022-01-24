const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ".db/Ecommerce"
    },
    useNullAsDefault: true
});

module.exports = {
    knex
}

