/*
This module contains the payment form for this application
*/

import { useState } from 'react';
import axios from 'axios';
import './paymentform.css'
import { NavLink } from 'react-router-dom';

function PaymentForm() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [field, setField] = useState(false)

  const onSubmit = async (e) => {
    /*
      on submit function call
      makes post request to node server
      to payment initializeation route
    */
      const apiUrl = process.env.REACT_APP_API_URL;
    e.preventDefault();

    if (!email || !amount) {
      setField(true)
    }
    
    try {
      const params = {email: email, amount: amount}
      const token = localStorage.getItem('token')
      const options = {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}}
      const response = await axios.post(`${apiUrl}/acceptpayment`, params, options)
      const authorizationUrl = response.data.message.data.authorization_url
      setField(false)
      window.location.href = authorizationUrl;
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className='content'>
       <NavLink to='/'>
          <button id='bk-btn'>Go Back</button>
        </NavLink>
      <div className="paymenForm">
      <h2>Payment Form</h2>
      { field && <h5 style={{color: 'red'}}>All fields are required</h5>}
      <form className='form'>
        
        <input type="email" id="emailField" name="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required/>

        
        <input type="text" id="amountField" name="amount" value={amount} placeholder="amount" onChange={(e) => setAmount(e.target.value)} required/>
        <div className='btn'>
        <button type="submit"  onClick={ onSubmit }>Make Donation</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default PaymentForm;
