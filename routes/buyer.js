const express = require("express");
const router = express.Router();
const buyer_controller = require("../controller/buyer");
router.use(express.json());

// FOR SIGNNING UP
router.post("/", buyer_controller.create_a_new_buyer);
// TO GET ALL BUYERS
router.get("/", buyer_controller.get_all_buyers);
// FOR LOGINNING IN
router.post("/login", buyer_controller.login);
// TO GET A SINGLE USER BY AN ADMIN
router.get("/:buyerId", buyer_controller.get_a_single_buyer);
//TO DELETE A BUY ER OR AN ACCOUNT
router.delete("/", buyer_controller.delete_buyer);
//TO UPDATE A BUYER
router.patch("/", buyer_controller.edit_buyer);
module.exports = router;
