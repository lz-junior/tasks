import { useState } from 'react';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import './login.css';


const Login = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin(e: any) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      alert("login realizado")
    } else {
      alert("PREENCHA OS CAMPOS PARA FAZER O LOGIN")
    }
  }


  return (
    <div>
      <h1>tasks</h1>

      <form className="form" onSubmit={handleLogin}>
        <span>E-mail</span>
        <input
          className="input-email"
          type='text' 
          placeholder='abc@email.com'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

        <span className="span-password">Password</span>
        <input
          type='password' 
          placeholder='******'
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>

        <button type="submit">Sign In</button>
      </form>

      <button>Forgot password?</button>
      <div>
        <button className="icons"><FaGoogle/></button>
        <button className="icons"><FaFacebook/></button>
      </div>
      <button>Create an account</button>
    </div>
  )
};

export default Login;