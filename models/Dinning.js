const mongoose = require('mongoose');

const DinningSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    number:{
        type:Number,
        required:true
    },
    text:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model('Dinning', DinningSchema);