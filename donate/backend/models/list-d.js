const mongoose = require('mongoose');


const ListdonsSchema = mongoose.Schema({
    categ:{
        type: String,
        required:true
    },
    nom:{
        type: String,
        required:true
    },
    prenom:{
        type: String,
        required:true
    },
    numero:{
        type: Number,
        required:true
    },
    description:{
        type: String,
        required:true
    }
    /*img:{
        type: ,
        required:true
    }*/
});

const Listdons = module.exports = mongoose.model('Listdons',ListdonsSchema);