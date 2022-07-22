const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};


function newTicket(req, res) {
    console.log(req.params.id);
    const objId = req.params.id;
    res.render('tickets/new', {  title: 'Add New Ticket', objId });
}

function create(req, res) {
    let ticket = new Ticket(req.body);
    Flight.findById(req.params.id, function(err, flight) {
        if (err) return res.redirect('/flights');
        ticket.flight = flight;
        ticket.save(function(err) {
            if (err) return res.redirect(`/flights/${flight._id}`);
            res.redirect(`/flights/${flight._id}`);
        });
    });
}