const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buyer = require("../routes/buyer");
const seller = require("../routes/seller");
const token_route = require("../routes/token_route");
const product = require("../routes/product");
const configuration = require("../configuration/index_config");
module.exports = app => {
  app.use("/buyer", buyer);
  app.use("/seller", seller);
  app.use("/token", token_route);
  app.use("/product", product);
  app.use(bodyParser.json());
  configuration;
};
