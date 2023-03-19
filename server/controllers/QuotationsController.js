const knex = require('../db');

// Retrieve all quotations
exports.quotationsAll = async (req, res) => {
    // Get all quotations from database
    knex
      .select('*') // select all records
      .from('quotes') // from 'quotes' table
      .then(userData => {
        // Send quotations extracted from database in response
        res.json(userData)
      })
      .catch(err => {
        // Send a error message in response
        res.json({ message: `There was an error retrieving quotations: ${err}` })
      })
  }