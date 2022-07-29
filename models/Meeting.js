const mongoose = require('mongoose')

const MeetingSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    room:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Meeting', MeetingSchema);