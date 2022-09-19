const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const { productName, price, category, countInStock, description, image } = req.body;
  try {
    const newProduct = new Product({
        productName,
        description,
        price,
        countInStock,
        image,
        category
    });
    await newProduct.save();
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    allProducts
      ? res.status(201).json(allProducts)
      : res.status(401).json({ msg: "getAll error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getOneProduct = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params._id);
    oneProduct
      ? res.status(201).send(oneProduct)
      : res.status(401).json({ msg: "get one product error" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params._id);
    res.status(201).json({ msg: "product deleted successfully" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updateProduct);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
exports.getDigitalProducts = async (req, res) => {
  try {
    const DigitalProducts = await Product.find({category:"Digital"});
    DigitalProducts
      ? res.status(201).json(DigitalProducts)
      : res.status(401).json({ msg: "error in getting Digital Products" });
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
