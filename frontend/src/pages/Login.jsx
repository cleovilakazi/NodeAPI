import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login, error, isLoading } = useLogin();

  const loginUser = async (event) => {
    event.preventDefault();

    await login(email, password);
  };
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Login</h1>
        <form onSubmit={(e) => loginUser(e)}>
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
        <Link to="/register">No account? Click to signup</Link>
      </motion.div>
    </MainLayout>
  );
};

export default Login;
