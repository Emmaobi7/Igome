
import './App.css';
import SignUpForm from './signup';
import UserLogin from './LoginForm';
import PasswordReset from './PasswordReset';
import TransactionDetails from './Transactions'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Confirm from './confirmation';
import PaymentForm  from './PaymentForm';
import { useEffect, useState } from 'react';
import { auth } from './firebase'
import LoadingSpinner from './LoadingSpinner';
import ProjectsPage from './ProjectsPage';


function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userauth => {
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

      setLoading(false)
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  
  
  return (
     <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUpForm /> } />
      
      <Route path='/' element={ user ? <ProjectsPage /> : <Navigate to='/login' /> } />
	    <Route path="/login" element={ <UserLogin /> } />
      <Route path='/reset-password' element={ <PasswordReset /> } />
	    <Route path='/confirmation' element={ <Confirm /> } />
      <Route path='/donations' element={ user ? <PaymentForm /> : <Navigate to='/login' /> }/>
      <Route path='/transaction' element={ <TransactionDetails />} />
          
      
	  </Routes>
	</section>
      </Router>
    </div>

  );
}

export default App;
