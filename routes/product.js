const express = require('express');
const { addProduct,getAllProduct,getOneProduct,deleteProduct,updateProduct, getDigitalProducts } = require('../controllers/product.controller');
// const { addproductRules,  } = require('../middlewares/Validator');
const router = express.Router();

router.post("/addproduct",  addProduct);
router.get("/getallproduct", getAllProduct);
router.get("/getOneProduct/:_id", getOneProduct);
router.get("/getDigitalProducts", getDigitalProducts);
router.delete("/deleteOneProduct/:_id", deleteProduct);
router.put("/updateProduct/:_id", updateProduct);


module.exports = router;

