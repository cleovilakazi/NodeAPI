import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const MainLayout = ({ children }) => {
  const { logout } = useLogout();
  const handleClick = () => {
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
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <Link to="/login" className="navbar-brand">
            Login
          </Link>
          <Link to="/register" className="navbar-brand">
            Register
          </Link>
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
