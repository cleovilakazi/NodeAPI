import React, {useState} from 'react';




const Login = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const loginUser = async (event) => {
        event.preventDefault()
        
        console.log(email, password)
        
      };
    return (
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
          <input type="submit" value="submit" />
        </form>
      </div>
    
 ) 
}

export default Login;
