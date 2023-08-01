import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const registerUser = async (event) => {
    event.preventDefault()
    
    const response = await fetch("http://localhost:3001/users", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json()
    console.log(data)
    
  };

 

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser()}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <br />
        <input type="button" value="submit" />
      </form>
    </div>
  );
};

export default Register;
