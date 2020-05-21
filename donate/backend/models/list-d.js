const mongoose = require('mongoose');


const ListdonsSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    categ:{
        type: String,
        required:true
    },
   /* nom:{
        type: String,
        required:true
    },
    prenom:{
        type: String,
        required:true
    },*/
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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


const Listdons = module.exports = mongoose.model('Listdons',ListdonsSchema);





