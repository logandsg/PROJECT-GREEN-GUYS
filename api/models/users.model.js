const mongoose = require('mongoose')

// const { PotModel } = require('../models/users.model')
// const { CropModel } = require('../models/users.model')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['member', 'seller', 'admin'],
    default: 'member'
  },
  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plants'
  }]
  // pots: [potSchema],
  // crops: [cropSchema]
})

exports.UserModel = mongoose.model('users', userSchema)
