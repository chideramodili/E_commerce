const Joi = require("joi");
const mongoose = require("mongoose");

const buyer = mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  date: {
    type: Date,

    default: Date.now
  },
  isBuyer: { type: Boolean, default: true }
});

module.exports = mongoose.model("buyer", buyer);
