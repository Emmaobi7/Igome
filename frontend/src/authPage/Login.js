import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth'
import { auth } from '../firebase';
import "../Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredentials.user
      const idToken = await getIdToken(user)
      localStorage.setItem('token', idToken)
      navigate('/home')
    } catch (err) {
      if (err){
        console.log(err.message)
      }
    }
  }

  return (
    <div className="Login">
      <h2 className="Login-title">Login page</h2>
      <form className="Login-form">
        <label htmlFor="emailField" className="Login-label">Email:</label>
        <input type="email" id="emailField" name="email" value={email} placeholder="Email address" className="Login-input" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="passwordField" className="Login-label">Password: </label>
        <input type="password" value={password} id="passwordField" name="password" placeholder="Password" className="Login-input" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="Login-button" onClick={onSubmit}>Login</button>
      </form>

      <p className="Login-links">
        Don't have an account?{' '}
        <NavLink to='/signup' className="Login-link">Sign Up</NavLink>
        Forgotten password?{' '}
        <NavLink to='/password-reset' className="Login-link">Password Reset</NavLink>
      </p>
    </div>
  )
}

export default Login;