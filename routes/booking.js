const router = require('express').Router();
const Booking = require('../models/Booking')


//Post the booked room to the database

router.post('/booking', (req, res) => {
    const newBooking = new Booking(req.body)
    try{
      newBooking.save();
      res.status(200).json(newBooking )
    } catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;