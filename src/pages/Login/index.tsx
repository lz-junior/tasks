import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import './login.css';


const Login = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function handleLogin(e: any) {
    e.preventDefault();

    if (email !== 'teste@teste.com' && password !== '123123' ) {
      alert("e-mail e/ou senha inválido")
    } else {
      navigate('/');
      alert("login realizado")
    }
  }



  return (
    <div>
      <h1 className="title-login"> Welcome to tasks</h1>

      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <span>E-mail</span>
        <input
          className="input-email"
          type='text' 
          placeholder='teste@teste.com'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

        <span className="span-password">Password</span>
        <input
          type='password' 
          placeholder='123123'
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>

        <button type="submit">Sign in</button>
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