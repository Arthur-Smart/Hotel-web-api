const router = require('express').Router();
const Booking = require('../models/Meeting')


//Post the booked room to the database

router.post('/meeting', (req, res) => {
    const newMeeting = new Booking(req.body)
    try{
     newMeeting.save();
      res.status(200).json(newMeeting)
    } catch(err){
      res.status(500).json(err)
    }
});

router.get('/meeting', async(req, res) => {
  try{
   const meetings = await Booking.find().sort({_id:-1})
   res.status(200).json(meetings)
  }catch(err){
   res.status(500).json(err)
  }
});

router.delete('/meeting/meet/:id', async(req, res) => {
  try{
   await Booking.findByIdAndDelete(req.params.id)
   res.status(200).json('User Deleted Successfully')
  }catch(err){
   res.status(500).json(err)
  }
})

module.exports = router;