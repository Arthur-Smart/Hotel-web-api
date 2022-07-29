const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  roomTitle:{
    type:String,
    required:true
  },
    date:{
        type:Object,
        required:true,
    },
   options:{
    type:Object,
    required:true
   },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    identificationcard:{
        type:Number,
        required:true,
        unique:true
    },
     totalPrice:{
        type:Number,
     },
     invoiceNo:{
      type:String
     }
},
{
    timestamps:true
});

module.exports = mongoose.model('Booking', BookingSchema);