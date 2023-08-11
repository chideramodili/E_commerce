const Product = require("../models/product");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const seller = require("../models/seller");

exports.create_new_product = async (req, res) => {
  const product = new Product(_.pick(req.body, ["productName", "amount"]));
  try {
    const new_product = await product.save();
    res.send(new_product);
  } catch (err) {
    res.send(err);
  }
};
