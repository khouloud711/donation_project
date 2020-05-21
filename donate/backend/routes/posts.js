const express = require('express');
var router = express.Router();
const verify = require('./verifyToken');
const Listdons = require('../models/list-d');
const User = require('../models/User');

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



  /**************** */

  router.post("/donn", (req, res, next) => {
    User.findById(req.body._id)
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: "user not found"
          });
        }
        const don = new Listdons({
          //_id: mongoose.Types.ObjectId(),
          description:req.body.description,
          categ: req.body.categ,
          user: req.body._id
        });
        return don.save();
      })
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: "don stored",
          createdDon: {
            _id: result._id,
            user: result.user,
            description:result.description,
            categ: result.categ,
          },
         /* request: {
            type: "GET",
            url: "http://localhost:3000/api/" + result._id
          }*/
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
  router.get("/:donId", (req, res, next) => {
    Listdons.findById(req.params._id)
      .populate('user')
      .exec()
      .then(don => {
        if (!don) {
          return res.status(404).json({
            message: "don not found"
          });
        }
        res.status(200).json({
          don: don,
          /*request: {
            type: "GET",
            url: "http://localhost:3000/dons"
          }*/
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
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