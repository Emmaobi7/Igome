import { useState } from 'react';
import axios from 'axios';
import './paymentform.css';
import { NavLink } from 'react-router-dom';

function PaymentForm() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [field, setField] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('paypal'); // Default payment method

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !amount) {
      setField(true);
      return;
    }

    try {
      const params = { email: email, amount: amount, paymentMethod: paymentMethod };
      const token = localStorage.getItem('token');
      const options = { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } };
      const response = await axios.post('http://localhost:5000/acceptpayment', params, options);
      const authorizationUrl = response.data.message.data.authorization_url;
      setField(false);
      window.location.href = authorizationUrl;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='payment-container'>
      <div className="paymentForm">
        <h2>Make a Donation</h2>
        {field && <p className="error-message">All fields are required</p>}
        <form>

          <div className="form-group">
            <label htmlFor="paymentMethod">Select Payment Method:</label>
            <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="paypal">PayPal</option>
              <option value="creditcard">Credit Card</option>
              <option value="banktransfer">Bank Transfer</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="emailField">Email Address:</label>
            <input type="email" id="emailField" name="email" value={email} placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="amountField">Amount:</label>
            <input type="text" id="amountField" name="amount" value={amount} placeholder="Enter the donation amount" onChange={(e) => setAmount(e.target.value)} required />
          </div>

          <button type="submit" className="btn-primary" onClick={onSubmit}>Make Donation</button>

        </form>
        <NavLink to='/' className="back-link">Go Back to Projects</NavLink>
      </div>
    </div>
  );
}

export default PaymentForm;
