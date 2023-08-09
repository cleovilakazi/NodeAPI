import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const MainLayout = ({ children }) => {
  const { logout } = useLogout();
  const user = useAuthContext();
  //const userEmail = user.user.email
  
  
  const handleClick = () => {
    console.log(user)
    
    logout();
  };
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
      </header>
      <main>
        <div className="container nt-3"></div>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
