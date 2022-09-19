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
    const  bookings = await Booking.find().sort({_id:-1})
    res.status(200).json(bookings)      
    } catch (err) {
      res.status(500).json(error)
    }
});

router.delete('/booking/book/:id', async(req, res) => {
  try{
   await Booking.findByIdAndDelete(req.params.id)
   res.status(200).json('Booking Deleted Successfully')
  }catch(err){
   res.status(500).json(err)
  }
})

module.exports = router;