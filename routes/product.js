const express = require("express");
const router = express.Router();

const product_controller = require("../controller/product");

router.use(express.json());

// TO ADD A PRODUCT
router.post("/", product_controller.create_new_product);

//TO GET A PRODUCT
router.get("/", product_controller.get_products);

//TO SERCH FOR A PRODUCT
router.post("/search", product_controller.search_for_a_product);

// TO EDIT A PRDUCT
router.patch("/");

module.exports = router;
