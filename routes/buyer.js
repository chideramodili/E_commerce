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

module.exports = router;
