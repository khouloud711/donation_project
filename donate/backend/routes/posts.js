const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const User = require('../models/User');
const Listdons = require('../models/list-d');
const Category = require('../models/Category')
//retreiving list dons
router.get('/list_dons',(req,res,next)=>{
    Listdons.find(function(err,list_dons){
      
        res.json(list_dons);
    })
    .populate("user")
    .populate("categ")
    .then(function(don) {
   
      res.json(don);
    })
});

//add list don
router.post('/donner', async (req,res,next)=>{
  const category = await Category.findOne({
    _id : req.body.categ
  })
  const user  = await User.findOne({
    _id  : req.body.user
 }) 
    let newlist_dons = new Listdons({
      /*categ: req.body.categ,
      nom: req.body.nom,
      prenom: req.body.prenom,
      numero: req.body.numero,*/
      categ: category._id,
      user: user._id, 
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



  /**************** */

  router.post("/donn", async (req, res) => {
  /* try {
      const category = await Category.findOne({
        _id : req.body.categ
      })
    }
    catch(err)
     {
      res.status(409)
      .json({message : 'category not exist'})
     }
    try{
     const user  = await User.findOne({
        _id  : req.body.user
     }) ; 
    }catch (err)
    {
      res.status(409)
      .json({message : 'user not exist'})

    }*/
    const category = await Category.findOne({
      _id : req.body.categ
    })
    const user  = await User.findOne({
      _id  : req.body.user
   }) 
     try {
      const saveDon = await new Listdons ({
      description:req.body.description,
      categ: category._id,
      user: user._id, 
     })
     const result = await saveDon.save(); 
     res.status(200).json(result) ; 


    } catch (err) {
      console.log('err' + err);
      res.status(500).send(err);
    }
  });
  

router.get("/don/:id", function(req, res) {

  Listdons.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("user")
    .populate("categ")
    .then(function(don) {
      // If we were able to successfully find a don with the given id, send it back to the client
      res.json(don);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports =  router;


/*
const multer=require('multer');
const storage= multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads');
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString + file.originalname);
  }
});
const upload = multer({
  storage: storage,
}); */