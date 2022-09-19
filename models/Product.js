const mongoose = require("mongoose");

const Schema = mongoose.Schema

const productSchema = new Schema({
    productName:String,
    description:String,
    price:Number,
    countInStock:Number,
    image:String,
    category:String
});


module.exports = mongoose.model('Product', productSchema);