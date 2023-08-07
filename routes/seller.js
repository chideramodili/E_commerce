const express = require("express");
const router = express.Router();
const seller_controller = require("../controller/seller");
router.use(express.json());
// TO CREATE A NEW BUYER
router.post("/", seller_controller.create_new_seller);
//TO LOGIN AS A SELLER
router.post("/login", seller_controller.seller_login);
// TO GET ALL SELLERS AS AN ADMIN
router.get("/", seller_controller.get_all_sellers);
module.exports = router;
