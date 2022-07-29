const router = require('express').Router();
const Booking = require('../models/Dinning')


//Post the meeting preparation to the database

router.post('/dinning', (req, res) => {
    const newDinning = new Booking(req.body)
    try{
       newDinning.save();
      res.status(200).json(newDinning)
    } catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;