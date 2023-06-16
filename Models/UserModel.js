const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  usertype: {
    type: String,
    required: true,
    default:"user"
  },
  
  password: {
    type: String,
    required: true
  },
  cart: [
    {
      productId: {
        type: String
      },
      quantity: {
        type: Number
      },
      price: {
        type: Number
      }
    }
  ],
  favorites: [
    {
      productId: {
        type: String
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
