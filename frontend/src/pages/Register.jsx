import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup, error, isLoading } = useSignUp();

  const registerUser = async (event) => {
    event.preventDefault();

    await signup(email, password);
  };

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      
        <h1>Register</h1>
        <form onSubmit={(e) => registerUser(e)}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input disabled={isLoading} type="submit" value="submit" />
          {error && <div className="error">{error}</div>}
        </form>
        <Link to="/login" >
          Have an account? Click to login
        </Link>
        </motion.div>
    </MainLayout>
  );
};

export default Register;
