const mongoose = require("mongoose");

const product = mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});
