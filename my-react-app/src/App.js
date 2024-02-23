import logo from './logo.svg';
import './App.css';
import './Payments';
import SignUpForm from './signup';
import UserLogin from './LoginForm';
import PasswordReset from './PasswordReset';
import TransactionDetails from './Transactions'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  
  return (
     <div className="App">
      <Router>
        <section>
	  <Routes>
	    <Route path="/signup" element={ <SignUpForm />} />
	    <Route path="/login" element={ <UserLogin /> } />
      <Route path='/reset-password' element={ <PasswordReset /> } />
      <Route path='/account' element={ <TransactionDetails /> } />
	    
	  </Routes>
	</section>
      </Router>
    </div>

  );
}

export default App;
