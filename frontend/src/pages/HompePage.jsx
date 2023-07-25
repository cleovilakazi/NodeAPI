import React from "react";
import {Link} from "react-router-dom";

const HompePage = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HompePage;
