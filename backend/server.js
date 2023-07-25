const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/productModels')

app.use(express.json())

mongoose.connect('mongodb+srv://cleopathrastudies:3sIwnJq8wh8Ssmyl@learnapis.4fbsavn.mongodb.net/ApiTables?retryWrites=true&w=majority').then(()=>{
    
app.listen(3000, ()=>{})
}).catch((error)=>{
    console.log(error)

})


app.get('/product', async(req, res) =>{
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
})

app.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                                    )
        
    }
})

app.post('/product', async(req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}                                    )
        
    }
})

app.put('/product/:id', async(req, res) =>{
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
})

app.delete('/product/:id', async(req, res) =>{
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
})