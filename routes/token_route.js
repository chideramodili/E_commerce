const router = require("express").Router();
const token = require("../token");

//FOR THE SELLERS
router.get("/seller", token.seller_token);

//FOR TGHE BUYERS
router.get("/buyer", token.buyer_token);
module.exports = router;
