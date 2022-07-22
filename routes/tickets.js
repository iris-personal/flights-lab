const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;