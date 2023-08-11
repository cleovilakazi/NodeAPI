import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeProduct, clearCart, getCartTotal } =
    useContext(CartContext);

  return cart.length > 0 ? (
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
            {cart.map((cartProduct, key) => (
              <tr key={key}>
                <td>{cartProduct.id}</td>
                <td>{cartProduct.name}</td>
                <td>{cartProduct.price}</td>
                <td>{cartProduct.quantity}</td>
                <td>{cartProduct.totalAmount}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeProduct(cartProduct)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col justify-between items-center">
        <h3 className="text-lg font-bold">Total: ${getCartTotal()}</h3>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          Clear cart
        </button>
      </div>
    </div>
  ) : (
    <p className="text-sm font-bold">Your cart is empty</p>
  );
};

export default Cart;
