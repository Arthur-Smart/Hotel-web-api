const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   invoiceNo:{
    type:String
   },
    title:{
        type:String,
        required:true,
    },
    qty:{
     type:String,
     required:true
    },
    deliver:{
        type:String,
        required:true,
    },
    total:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Order', OrderSchema);