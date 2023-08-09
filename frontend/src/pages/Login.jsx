import React, {useState} from 'react';
import { useLogin } from "../hooks/useLogin";
import MainLayout from "../layouts/MainLayout";

const Login = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { login, error, isLoading } = useLogin();


    const loginUser = async (event) => {
        event.preventDefault()
        
        await login(email, password)
        
      };
    return (
        <MainLayout>
        <div>
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
      </div>
      </MainLayout>
    
 ) 
}

export default Login;
