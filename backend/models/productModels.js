const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Product name']
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
    //timestamps: true
})

const Product = mongoose.model("Product", schema);
module.exports = Product;