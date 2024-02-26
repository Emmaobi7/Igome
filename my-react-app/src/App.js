
import './App.css';
import SignUpForm from './signup';
import UserLogin from './LoginForm';
import PasswordReset from './PasswordReset';
import TransactionDetails from './Transactions'
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import Confirm from './confirmation';
import PaymentForm  from './PaymentForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { auth } from './firebase'


function App() {

  const [user, setUser] = useState(null)
 
  async function getUser() {
    let user;

    try {
      const token = localStorage.getItem('token')
      const options = {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}}
      user = await axios.post('http://localhost:5000/get_user', options)
      if (user.status === 200) { setUser(user) }
      console.log(user.status)
      return user
    } catch(err) {
      console.log(err)
      return null;
    }
  }

  getUser()
  

  return (
     <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUpForm />} />
	    <Route path="/login" element={ <UserLogin /> } />
      <Route path='/reset-password' element={ <PasswordReset /> } />
      <Route path='/account' element={ user ? <TransactionDetails /> : <Navigate to='/login'/> } />
	    <Route path='/confirmation' element={ <Confirm /> } />
      <Route path='/transfers' element={ user ? <PaymentForm /> : <Navigate to='/login'/> }/>
	  </Routes>
	</section>
      </Router>
    </div>

  );
}

export default App;
