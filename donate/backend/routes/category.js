const Category = require('../models/Category');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');
const router = require('express').Router();

/*
// get the list of the category
router.get('/',verify, function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        Category.find(function (err, categories) {
        if (err) return next(err);
        res.json(categories);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});
// get a single category by ID
router.get('/:id', verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
      Category.findById(req.params.id, function (err, category) {
        if (err) return next(err);
        res.json(category);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
//put a category by ID
router.put('/:id', function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
      Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
// delete a category by ID
  router.delete('/:id', verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
      Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
        if (err) return next(err);
        res.json(category);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });*/


  router.post('/save' , async (req,res)=>{
    
      try {
        
          const cat =  new Category({
            catName : req.body.catName
          })
          
          const result = await cat.save(); 
          res.status(200).json(result) ; 
      }
      catch (err){
        res.status(409).json({message : "3andek mochkla base "})
      }


  })

  //retreiving categories
router.get('/categories', (req,res,next)=>{
  Category.find(function(err,categ){
    
      res.json(categ);
  })
});
 
  module.exports = router;