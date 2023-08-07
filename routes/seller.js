const express = require("express");
const router = express.Router();
const seller_controller = require("../controller/seller");
router.use(express.json());
// TO CREATE A NEW BUYER
router.post("/", seller_controller.create_new_seller);
module.exports = router;
