const mongoose = require("mongoose");

const product = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = mongoose.model("product", product);
