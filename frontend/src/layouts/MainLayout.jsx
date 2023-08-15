import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { CartContext } from "../contexts/CartContext";
import Cart from "../pages/Cart";


const MainLayout = ({ children }) => {
  const { logout } = useLogout();
  const user = useAuthContext();
  const {cart} = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)
  
  
  const handleClick = () => {
    logout();
  };

  const toggle = () => {
    setShowModal(!showModal)
  }
  

  return (
    <div>
      <header>
        <nav className="navbar ">
          <div >
            <Link to="/" className="navbar-brand">
              Magic Donuts
            </Link>
          </div>
          {user.user ? (
            <div className="nav-left-content">
              <span className="user material-symbols-outlined">account_circle</span>
              {!showModal && <button  className ="btn cart-btn material-symbols-outlined" onClick={toggle}>shopping_cart<sup className="cart-length">{cart.length}</sup></button>}
              <button className ="btn logout-btn" onClick={handleClick}>Logout</button>
            </div>
          ) :
          (<div className="nav-left-content">
            <button className="btn-login"><Link className="login-link" to="/login" >
              Login
            </Link>
            </button>
            <button className="btn-register">
            <Link className="signup-link" to="/register" >
              Register
            </Link>
            </button>
          </div>)}
        </nav>
        <Cart showModal={showModal} toggle={toggle} />
      </header>
      <main>
        <div className="container nt-3"></div>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
