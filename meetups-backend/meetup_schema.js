const mongoose = require('mongoose');

const meetupSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: String,
    image: String,
    address: String
  });
  
module.exports = mongoose.model('meetups', meetupSchema)