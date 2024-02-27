
import './App.css';
import SignUpForm from './signup';
import UserLogin from './LoginForm';
import PasswordReset from './PasswordReset';
import TransactionDetails from './Transactions'
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Confirm from './confirmation';
import PaymentForm  from './PaymentForm';
import { useEffect, useState } from 'react';
import { auth } from './firebase'

function App() {

  const [user, setUser] = useState(null)

  auth.onAuthStateChanged((userauth) => {
    if (userauth) {
        if (userauth.emailVerified) {
            console.log('user verified');
            setUser(true);

        } else {
          setUser(false);
        }
    } else {
        console.log('user is not authenticated');
        setUser(false);
    }
  });

  

  return (
     <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUpForm />} />;
      <Route path='/' element={ user ? <TransactionDetails /> : <Navigate to='/login' /> } />
	    <Route path="/login" element={ !user ? <UserLogin /> : <Navigate to='/' /> } />
      <Route path='/reset-password' element={ <PasswordReset /> } />
	    <Route path='/confirmation' element={ <Confirm /> } />
      <Route path='/transfers' element={ user && <PaymentForm /> }/>
	  </Routes>
	</section>
      </Router>
    </div>

  );
}

export default App;
