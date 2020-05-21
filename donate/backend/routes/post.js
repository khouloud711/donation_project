/*const express = require('express');
var router = express.Router();
const verify = require('./verifyToken');
const Donation = require('../models/Donation');

//GET the list of posts
router.get('/', verify, function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        Donation.find(function (err, posts) {
        if (err) return next(err);
        res.json(posts);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});
// GET a single post data by ID
router.get('/:id', verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Donation.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
//POST a post data
router.post('/',verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
      Post.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
// PUT a post data by ID
router.put('/:id', verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Donation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });
//DELETE a post data by ID
router.delete('/:id',verify, function(req, res, next) {
    var token = getToken(req.headers);
    if (token) {
        Donation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });*/