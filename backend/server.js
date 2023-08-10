require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
app.use(express.json())
const userRoute = require("./routes/userRoutes")
const productRoute = require('./routes/productRoutes')

app.use('/',userRoute)
app.use('/', productRoute)




mongoose.connect(process.env.URI).then(()=>{
    
app.listen(3001, ()=>{})
}).catch((error)=>{
    console.log(error)

})

