const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const buyer = require("../routes/buyer");
const configuration = require("../configuration/index_config");
module.exports = app => {
  app.use("/buyer", buyer);
  configuration;
};
