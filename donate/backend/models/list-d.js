 
const mongoose = require('mongoose');


const ListdonsSchema = mongoose.Schema({
    
    categ:{type: mongoose.Schema.Types.ObjectId, ref: 'Category' , required : true },
   /* nom:{
        type: String,
        required:true
    },
    prenom:{
        type: String,
        required:true
    },*/
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required : true },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    /*numero:{
        type: Number,
        required:true
    },*/
    description:{
        type: String,
        required:true
    },
    img:{
        type: String
    }
});


 module.exports = mongoose.model('Listdons',ListdonsSchema);