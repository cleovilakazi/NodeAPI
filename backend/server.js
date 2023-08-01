require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/productModels')
const User = require('./models/userModel')
const cors = require('cors')
const jwt = require('jsonwebtoken')
app.use(express.json())
app.use(cors())

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})

}


mongoose.connect(process.env.URI).then(()=>{
    
app.listen(3001, ()=>{})
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

app.post('/login', async(req,res) =>{
    const {email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})  
        
    } catch (error) {
        res.status(400).json({message: error.message})
         
    }

})

app.post('/register', async(req, res) =>{
    
    const {email, password } = req.body
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})  
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
     
    
})