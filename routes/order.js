const router = require('express').Router();
const Order = require('../models/FoodOrder')


//Post the booked room to the database

router.post('/food-order', (req, res) => {
    const newOrder = new Order(req.body)
    try{
     newOrder.save();
      res.status(200).json(newOrder)
    } catch(err){
      res.status(500).json(err)
    }
});

router.get('/food-order', async(req, res) => {
  try{
   const order = await Order.find().sort({_id:-1})
   res.status(200).json(order)
  }catch(err){
   res.status(500).json(err)
  }
})

router.delete('/food-order/del/:id', async(req, res) => {
  try {
  await Order.findByIdAndDelete(req.params.id)
  res.status(200).json('Order deleted Successfully')    
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
