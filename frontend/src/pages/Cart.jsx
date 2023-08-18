import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {motion} from "framer-motion"

const Cart = ({ showModal, toggle }) => {
  const { cart, removeProduct, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal &&
    (cart.length > 0 ? (
      <motion.div 
      
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}} 
      className="parent">
        <div className="child">
          <button className="close material-symbols-outlined" onClick={toggle}>
            close
          </button>

          {cart.map((cartProduct, key) => (
            <div className="cart-item" key={key}>
              <img
                className="cart-image"
                src={cartProduct.image}
                alt={cartProduct.name}
              ></img>

              <p className="cart-item-name">{cartProduct.name}</p>
              <p className="cart-item-price">{cartProduct.price}</p>
              <p className="cart-item-quantity">{cartProduct.quantity}</p>
              <p className="cart-item-total">{cartProduct.totalAmount}</p>
              
                <button
                  className="btn"
                  onClick={() => removeProduct(cartProduct)}
                >
                  Remove
                </button>
              
            </div>
          ))}

          <div className="flex flex-col justify-between items-center">
            <h3 className="text-lg font-bold">Total: R{getCartTotal()}</h3>
            <button
              className="btn"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        </div>
      </motion.div>
    ) : (
      
        <motion.div 
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}  className="parent">
        <div className="child">
          <button className="close material-symbols-outlined" onClick={toggle}>
            close
          </button>
          <img
            className="empty-cart-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLhV29HaDKqmUqIqveXIBCyMdcaINrOyLmA&usqp=CAU"
            alt="empty cart"
          ></img>
          <p className="text-sm font-bold empty-cart-text">
            Your cart is empty
          </p>
        </div>
      </motion.div>
    ))
  );
};

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Cart;
