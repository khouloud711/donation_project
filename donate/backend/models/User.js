const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    firstname: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    lastname: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    number: {
        type: Number,
        required: true,
        //max: 2048,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const User=mongoose.model('User',userSchema);
module.exports=User;
/*module.exports = mongoose.model('User',userSchema);*/