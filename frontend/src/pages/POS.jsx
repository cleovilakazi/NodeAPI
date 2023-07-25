import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";

const POS = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get("product");
    setProducts(await result.data);
    setIsLoading(false);
  };

  const addProductToCart = async(product) => {
    let findProductInCart = await cart.find(i=>{
      return i.id === product.id
    })
    if(findProductInCart){
      let newCart = [];
      let newItem;
      cart.forEach(cartItem => {
        if(cartItem.id === product.id){
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity +1,
            totalAmount: cartItem.price * (cartItem.quantity + 1)
          }
          newCart.push(newItem);
        }

      })


    }
    else{
      let addingProduct = {
        ...product,
        'quantity': 1,
        'totalAmount': product.price

      }
      setCart([...cart,addingProduct])
    }
    



  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-8">
          {isLoading ? (
            "Loading"
          ) : (
            <div className="row">
              {products.map((product, key) => (
                <div key={key} className="col-lg-4">
                  <div className="border" onClick={() => addProductToCart(product)}>
                    <p>{product.name}</p>
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.name}
                    />
                    <p>R{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4"></div>
      </div>
    </MainLayout>
  );
};

export default POS;