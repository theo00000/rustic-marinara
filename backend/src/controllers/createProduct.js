import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;

    // validasi field text
    if (!name || !price || !description || !category || !stock) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // validasi image
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;

    const product = await Product.create({
      name,
      price,
      image: imageUrl,
      description,
      category,
      stock,
    });

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to create product",
      error: err.message,
    });
  }
};
