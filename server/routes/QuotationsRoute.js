// Import express
const express = require('express');

// Import QuotationsController
const quotationsRoutes = require('../controllers/QuotationsController.js');

// Create router
const router = express.Router();

// Add route for GET request to retrieve all quotatiosn
// In server.js, quotations route is specified as '/quotations'
// this means that '/all' translates to '/quotations/all'
router.get('/all', quotationsRoutes.quotationsAll);

router.post('/create', quotationsRoutes.addNewQuote);

router.put('/delete', quotationsRoutes.deleteQuote);

router.put('/update',quotationsRoutes.updateQuote);

// Export router
module.exports = router