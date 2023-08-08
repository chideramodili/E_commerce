const router = require("express").Router();
const Seller = require("../models/seller");

const verify = require("./token");

router.get("/", verify, (req, res) => {
  //   res.send(req.user);
  res.send(
    Seller.findOne({ email: req.body.email, password: req.body.password })
  );
});

module.exports = router;
