import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
//import { addProductToCart, removeProduct } from "./Cart";
import { useAuthContext } from "../hooks/useAuthContext";
import { CartContext } from "../contexts/CartContext";

const POS = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuthContext();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const res = fetch("product", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const data = (await res).text();
      const a = await data;
      const parsed = JSON.parse(a);

      setProducts(parsed);
      setIsLoading(false);
    };

    if (user) {
      fetchProducts();
    }
  }, [user]);


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
                  <div className="border">
                    
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.name}
                    />
                    <p>{product.name}</p>
                    <div className="row">
                      <div className="col-5">
                        <p>R{product.price}</p>
                      </div>
                      <div className="col-5">
                        <button className ="btn" onClick={() => addProductToCart(product)}>
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </MainLayout>
  );
};

export default POS;
