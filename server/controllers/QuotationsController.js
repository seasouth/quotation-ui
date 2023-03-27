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

exports.addNewQuote = async (req, res) => {
  // Add new quote to database
  knex('quotes')
    .insert({ // insert new record
      'ID': req.body.ID,
      'quotation': req.body.quotation,
      'authorFirst': req.body.authorFirst,
      'authorMiddle': req.body.authorMiddle,
      'authorLast': req.body.authorLast,
      'context': req.body.context,
      'notes': req.body.notes,
      'quoteSource': req.body.quoteSource,
      'quoteYear': req.body.quoteYear,
      'title': req.body.title,
      'usedDate': req.body.usedDate
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Quote \'${req.body.quotation}\' created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} quote: ${err}` })
    })
}

exports.deleteQuote = async (req, res) => {
  knex('quotes')
    .where('ID', req.body.ID)
    .del()
    .then(() => {
      res.json({ message: 'Quote deleted.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: 'There was an error deleting this quote: ' + err })
    })
}

exports.updateQuote = async (req, res) => {
  knex('quotes')
    .where('ID', req.body.ID)
    .update(req.body)
    .then(() => {
      res.json({ message: 'Quote updated.' })
    })
    .catch(err => {
      res.json({ message: 'There was an error updating this quote: ' + err })
    })
}