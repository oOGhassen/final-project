const express = require("express");
const connectDB = require("./config/connectDB");
const product = require('./routes/product')
const user =require('./routes/user.js')
const cart =require('./routes/cart')
const upload = require("./routes/upload");



const app = express();

const PORT = process.env.PORT || 6000;

connectDB();

app.use(express.json())
app.use('/user',user);
app.use('/product',product);
app.use('/api',cart);
app.use("/upload", upload);




  
app.listen(PORT, (err) => 
    err ? console.error(err) : console.log(`Server is Running on Port ${PORT}...`)
);