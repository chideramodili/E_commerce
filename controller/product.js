const Product = require("../models/product");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const seller = require("../models/seller");
const express = require("express");
const router = express.Router();

exports.create_new_product = async (req, res) => {
  const product = new Product(_.pick(req.body, ["productName", "amount"]));
  try {
    const new_product = await product.save();
    res.send(new_product);
  } catch (err) {
    res.send(err);
  }
};


exports.search_for_a_product = async (req, res) => {
  
 
  try {
    const search = await Product.search( search => (_.pick(req.body), ["search"]))
    router.get(res.json(search))
    
  } catch (err) {
    res.send(err)
  }
}

exports.get_products = async (req, res) => {
  try {
    const product = await Product.find()
    res.send(product)
  } catch (err) {
    res.send(err)
  }
}