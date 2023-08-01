const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Product = require('./models/productModels')
const User = require('./models/userModel')
const cors = require('cors')


app.use(express.json())
app.use(cors())

// const signup = async (email, password) => {
    
//     const exists = await User.findOne({ email });
//     if (exists) {
//       throw Error("Email already in use");
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     const user = await User.create({ email, password: hash });
  
//     return user;
//   }; 

mongoose.connect('mongodb+srv://cleopathrastudies:3sIwnJq8wh8Ssmyl@learnapis.4fbsavn.mongodb.net/ApiTables?retryWrites=true&w=majority').then(()=>{
    
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

app.post('/login', (req,res) =>{
    res.json({msg: "login user"})

})

app.post('/register', (req, res) =>{
    
    const {email, password } = req.body
    try {
        const user = User.signup(email, password)
        res.status(200).json({email, user})
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
     
    
})