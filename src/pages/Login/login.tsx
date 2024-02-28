import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
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
      <h1 className="title-login">tasks</h1>

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

      <div className="section2">
        <button className="btn-login-create-forgot">Forgot password?</button>
        <button className="btn-login-create-forgot">Create an account</button>
      </div>

      <div className="icons">
        <button><FcGoogle size={55}/></button>
        <button><FaFacebook size={55}/></button>
      </div>
    </div>
  )
};

export default Login;