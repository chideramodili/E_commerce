const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buyer = require("../routes/buyer");
const seller = require("../routes/seller");
const token = require("../routes/token");
const configuration = require("../configuration/index_config");
module.exports = app => {
  app.use("/buyer", buyer);
  app.use("/seller", seller);
  app.use("/token", token);
  app.use(bodyParser.json());
  configuration;
};
