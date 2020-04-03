const express = require('express');
var router = express.Router();

const Listlivres = require('../models/list-livres');

//retreiving list livres
router.get('/list_livres',(req,res,next)=>{
    Listlivres.find(function(err,list_livres){
        res.json(list_livres);
    })
});

//add list livre
router.post('/don-livres',(req,res,next)=>{
    let newlist_livres = new Listlivres({
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero: req.body.numero,
        description: req.body.description
    });

    newlist_livres.save((err,list_livre)=>{
        if(err){
            res.json({msg:'failed to add '});
        }else{
            res.json({msg:'don-livres added successfully'});
        }
    });
});


module.exports =  router;