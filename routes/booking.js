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


router.get('/booking', async(req, res) => {
    try {
    const  bookings = await Booking.find()
    res.status(200).json(bookings)      
    } catch (err) {
      res.status(500).json(error)
    }
})

module.exports = router;