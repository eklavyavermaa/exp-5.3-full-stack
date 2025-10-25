const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByCategory,
  getProductsByColor,
  insertSampleData,
} = require("../controllers/productController");

// Routes
router.get("/products", getAllProducts);
router.get("/products/category/:category", getProductsByCategory);
router.get("/products/by-color/:color", getProductsByColor);
router.post("/insert-sample", insertSampleData);

module.exports = router;
