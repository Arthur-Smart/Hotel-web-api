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

module.exports = router;