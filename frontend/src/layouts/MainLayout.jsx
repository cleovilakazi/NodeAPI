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
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Magic Donuts
            </Link>
          </div>
          {user.user ? (
            <div>
              <span>{user.user.email}</span>
              {!showModal && <button onClick={toggle}>Cart<sup>{cart.length}</sup></button>}
              <button onClick={handleClick}>Logout</button>
            </div>
          ) :
          (<div>
            <Link to="/login" className="navbar-brand">
              Login
            </Link>
            <Link to="/register" className="navbar-brand">
              Register
            </Link>
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
