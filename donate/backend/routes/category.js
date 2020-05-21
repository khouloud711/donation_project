/*const router = require('express').Router();
const Category = require('../models/Category');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');


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
router.put('/:id', authoriverifyze, function(req, res, next) {
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