const express = require("express")

const {getAllProducts, 
    getOneProduct, 
    deleteProduct, 
    updateProduct, 
    createProduct} = require("../controllers/product")

const router = express.Router()
const requireAuth = require("../middelware/requireauth")
router.use(requireAuth)

router.get("/product", getAllProducts)
router.get("/product/:id", getOneProduct)
router.post("/product", createProduct)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)


module.exports = router