const express = require('express');
var router = express.Router();
const verify = require('./verifyToken');
const Listdons = require('../models/list-d');

//retreiving list dons
router.get('/list_dons',(req,res,next)=>{
    Listdons.find(function(err,list_dons){
        res.json(list_dons);
    })
});

//add list don
router.post('/donner', (req,res,next)=>{
    let newlist_dons = new Listdons({
        categ: req.body.categ,
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero: req.body.numero,
        description: req.body.description
        /*img:req.body.img*/
    });

    newlist_dons.save((err,list_don)=>{
        if(err){
            res.json({msg:'failed to add '});
        }else{
            res.json({msg:'don added successfully'});
        }
    });
});


module.exports =  router;