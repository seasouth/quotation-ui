const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/quotations.sqlite')

// Create connection to SQLite database
const knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

module.exports = knex