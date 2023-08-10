const Product = require('../models/productModels')

const getAllProducts =  async(req, res) =>{

    try {
        const product = await Product.find()
        res.status(200).json(product)
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
        
    }
}

const getOneProduct =  async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                                    )
        
    }
}
 

const createProduct =  async(req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                                    )
        
    }
}

const updateProduct =  async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            res.status(404).json({
                message: `Cannot find product with ID ${id}`
            })
        }
        else{
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                           )
        
    }
}

 const deleteProduct =  async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body)
        if(!product){
            res.status(404).json({
                message: `Cannot find product with ID ${id}`
            })
        }
        else{
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                           )
        
    }
}

module.exports = {getAllProducts, getOneProduct, deleteProduct, createProduct, updateProduct}