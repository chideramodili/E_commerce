const express = require("express");
const router = express.Router();

const product_controller = require("../controller/product");

router.use(express.json());

// TO ADD A PRODUCT
router.post("/", product_controller.create_new_product);

//TO GET A PRODUCT
router.get("/");

//TO SERCH FOR A PRODUCT
router.get("/search");

// TO EDIT A PRDUCT
router.patch("/");

module.exports = router;
