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

router.get('/dinning', async(req, res) => {
  try{
   const dinning = await Booking.find().sort({_id:-1})
   res.status(200).json(dinning)
  }catch(err){
   res.status(500).json(err)
  }
})

router.delete('/dinning/dine/:id', async(req, res) => {
  try{
   await Booking.findByIdAndDelete(req.params.id)
   res.status(200).json('Dinning Deleted Successfully')
  }catch(err){
   res.status(500).json(err)
  }
})

module.exports = router;