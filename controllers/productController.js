const Product = require("../models/Product");

// ➤ GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ GET products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ GET products by variant color
exports.getProductsByColor = async (req, res) => {
  try {
    const color = req.params.color;
    const products = await Product.find({ "variants.color": color });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➤ INSERT sample data
exports.insertSampleData = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Running Shoes",
        price: 120,
        category: "Footwear",
        variants: [
          { color: "Red", size: "M", stock: 10 },
          { color: "Blue", size: "L", stock: 5 },
        ],
      },
      {
        name: "Winter Jacket",
        price: 200,
        category: "Apparel",
        variants: [
          { color: "Black", size: "S", stock: 8 },
          { color: "Gray", size: "M", stock: 12 },
        ],
      },
      {
        name: "Smartphone",
        price: 699,
        category: "Electronics",
        variants: [],
      },
    ];

    await Product.insertMany(sampleProducts);
    res.status(201).json({ message: "Sample data inserted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
