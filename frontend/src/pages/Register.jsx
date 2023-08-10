import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";
import MainLayout from "../layouts/MainLayout";

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
      <div>
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
      </div>
    </MainLayout>
  );
};

export default Register;
