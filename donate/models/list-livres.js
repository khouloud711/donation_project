const mongoose = require('mongoose');


const ListlivresSchema = mongoose.Schema({
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
});

const Listlivres = module.exports = mongoose.model('Listlivres',ListlivresSchema);