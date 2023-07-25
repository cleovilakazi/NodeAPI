import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HompePage = () => {
  return (
    <MainLayout>
      <div className="bg-light p-5 nt-4 rounded-3">
        <h1> Welcome to the website</h1>
        <p>Sed ut perspiciatis unde omnis iste natus</p>
        <p>error sit voluptatem accusantium doloremque</p>
        <p>laudantium, totam rem aperiam, eaque ipsa quae ab </p>
        <p>illo inventore veritatis et quasi architecto beatae </p>
        <p>vitae dicta sunt explicabo. Nemo enim ipsam voluptatem </p>
        <p>quia voluptas sit aspernatur aut odit aut fugit, </p>
        <p>sed quia consequuntur magni dolores eos qui ratione </p>
        <p>voluptatem sequi nesciunt. </p>
        <Link to="/pos" className="btn bg-primary">
          Click to view products
        </Link>
      </div>
    </MainLayout>
  );
};

export default HompePage;
