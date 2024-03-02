/*
All transactions logic
route: /
*/

import React from 'react';
import './transaction.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';


const TransactionDetails = () => {
  /*
  dynamically populate page
  Balance and donations
  email, date and amount
  */
  const [balance, setBalance] = useState(null);
  const [userTransactions, setUserTransactions] = useState(null)

  useEffect(() => {
    async function loadData() {
      let data;
      let transactions;
      const token = localStorage.getItem('token')
      const options = {headers: {Authorization: `Bearer ${token}`}}
      try{
        const balanceResponse = await axios.get('http://localhost:5000/balance', options)
        if (balanceResponse.status === 200) { data = balanceResponse.data.message.data[0] }
        setBalance(data.balance / 100)

        const transactionsResponse = await axios.get('http://localhost:5000/transactions', options)
        if (transactionsResponse.status === 200) {transactions = transactionsResponse.data.message.data}
        setUserTransactions(transactions)
        
      } catch(err) {
        console.log(err)
      }
    }

    loadData();
  }, [])

  return (
    <body>
    <main>
    <div className='transactions' >
      <div className='navigation' >
        
      <h2>Donations</h2>
      <p>{ new Date().toDateString() }</p>
    
      <div className='square'>current Balance</div>
      <div className='balance'>
        <div className=''>
          {/* Balance Circle */}
          <div className='balance-amount'>
            ${balance}
            <span id='span'>.00</span>
          </div>
          {/* Incoming and Outgoing Finances */}
          <div div className='spending'>
            <div className='right'>
            <NavLink to='/transfers'>
              <button>Donate</button>
            </NavLink>
              <div className='amount green'>
            </div>
            </div>
            <div className='left'>
              <Logout />
              <div className='amount red'>
              
            </div>
          </div>
          </div>
          {/* Remaining Balance */}
          
          {/* Transaction Details */}
          
            <h3 className='alldonations'>All Donations</h3>
            <div className='payments'>
            {userTransactions ? (
            userTransactions.map((transaction) => (
              <div className='transaction' key={transaction.id}>
                <>
                  <div className='left'>
                    <div className='name'>{transaction.customer.email}</div>
                    <div className='datetime'>{new Date(transaction.created_at).toLocaleString()}</div>
                  </div>
                  <div className='right'>
                    <div className='amount green'>+${transaction.amount / 100}</div>
                  </div>
                </>
              </div>
            ))
          ) : (
            <p>Loading transactions...</p>
          )}
        </div>
      </div>
    </div>
  </div>
  </div>
  </main>
  </body>
  );
};

export default TransactionDetails;