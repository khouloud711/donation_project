/*const mongoose = require('mongoose');

var DonationSchema = new mongoose.Schema({
  category : { type: Schema.Types.ObjectId, ref: 'Category' },
  user : {  author: {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
            username: String
}},
  numero:{
      type: Number,
      required:true
  },
  description:{
      type: String,
      required:true
  },
  img:{
      type: String
  },
  created: { type: Date },
  updated: { type: Date, default: Date.now },
}); 

const Donation = module.exports = mongoose.model('Donation',DonationSchema);*/