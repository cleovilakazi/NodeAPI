import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { addProductToCart, removeProduct } from "./Cart";

import { useAuthContext } from "../hooks/useAuthContext";

const POS = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useAuthContext();

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


  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((cartItem) => {
      newTotalAmount += cartItem.to;
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

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
                  <div
                    className="border"
                    onClick={() => addProductToCart(product,cart, setCart)}
                  >
                    <p>{product.name}</p>
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt={product.name}
                    />
                    <div className="row">
                      <div className="col-5">
                        <p>R{product.price}</p>
                      </div>
                      <div className="col-5">
                        <button>add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div className="table-responsive bg-dark">
            <table className="table table-responsive table-dark table-hover">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {cart
                  ? cart.map((cartProduct, key) => (
                      <tr key={key}>
                        <td>{cartProduct.id}</td>
                        <td>{cartProduct.name}</td>
                        <td>{cartProduct.price}</td>
                        <td>{cartProduct.quantity}</td>
                        <td>{cartProduct.totalAmount}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeProduct(cartProduct, cart, setCart)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  : "No item in cart"}
              </tbody>
            </table>
            <h3 className="px-2 text-white">R{totalAmount}</h3>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default POS;
