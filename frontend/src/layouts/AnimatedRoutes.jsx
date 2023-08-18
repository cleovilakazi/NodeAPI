import React from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import HompePage from "../pages/HompePage";
import POS from "../pages/POS";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={!user ? <HompePage /> : <Navigate to="/pos" />}
        />
        <Route path="/pos" element={user ? <POS /> : <Navigate to="/" />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/pos" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/pos" />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
