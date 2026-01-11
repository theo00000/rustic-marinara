import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const image = `/uploads/${req.file.filename}`;

    const product = await Product.create({
      name,
      price,
      description,
      category,
      stock,
      image,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getAllProducts = async (req, res) => {
  try {
    console.log(await Product.find());
    const products = await Product.find();
    res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve products",
        error: error.message,
    });
  } 
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;  
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({
        message: "Product not found",
        });
    }
    res.status(200).json({
        message: "Product retrieved successfully", 
        data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve product",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);    
        if (!product) {
            return res.status(404).json({
            message: "Product not found",
            });
        }
        res.status(200).json({
            message: "Product deleted successfully",
            data: product,
        });
    } catch (error) {
        res.status(500).json({
        message: "Failed to delete product",
        error: error.message,
        });
    }   
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const allowedUpdates = [
      "name",
      "price",
      "image",
      "description",
      "category",
      "stock",
    ];

    const updates = {};

    allowedUpdates.forEach((key) => {
      if (req.body[key] !== undefined) {
        updates[key] = req.body[key];
      }
    });

    const product = await Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};
