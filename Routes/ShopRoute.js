const express = require("express");
const router = new express.Router();
const { addProduct, getProduct, deleteProduct, getSingleProduct } = require("../Controller/ShopController")

router.get("/shop",getProduct);

router.get("/shop/get",getSingleProduct);

router.post("/shop/addproduct",addProduct);

router.post("/shop/deleteproduct",deleteProduct);

module.exports = router