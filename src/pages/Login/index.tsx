import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import './login.css';


const Login = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function handleLogin(e: any) {
    e.preventDefault();

    if (email !== 'teste@teste.com' || password !== '123123' ) {
      toast.error("invalid email or password!")
    } else {
      navigate('/');
      toast.success("Welcome")
    }
  }


  return (
    <div>
      <h1 className="title-login"> Welcome to tasks</h1>

      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <span className="spann">E-mail</span>
        <input
          className="input-email"
          type='text' 
          placeholder='teste@teste.com'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

        <span className="spann">Password</span>
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
    </div>
  )
};

export default Login;