import { useState } from 'react';
import classes from './Login.module.css';


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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <span>E-mail</span>
        <input 
          type='text' 
          placeholder='abc@email.com'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

        <span>Password</span>
        <input 
          type='password' 
          placeholder='******'
          value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
};

export default Login;