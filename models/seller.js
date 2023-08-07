const mongoose = require("mongoose");

const seller = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,

    default: Date.now
  },
  is_seller: { type: Boolean, default: true }
});

module.exports = mongoose.model("seller", seller);
