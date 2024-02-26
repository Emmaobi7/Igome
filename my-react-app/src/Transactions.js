import React from 'react';
import './transaction.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';


const TransactionDetails = () => {
  // Define dynamic values
  const incoming = 2000;
  const outgoing = 1000;
  const remainingBalance = outgoing;

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
        <Logout />
        
        <NavLink to='/transfers'>
         <button>Donate</button>
        </NavLink>
      <p>MyWallet</p>
      <p>{ new Date().toDateString() }</p>
    
      <div className='square'>current Balance</div>
      <div className='balance'>
        <div className=''>
          {/* Balance Circle */}
          <div >
            ${balance}
            <span>.00</span>
          </div>
          {/* Incoming and Outgoing Finances */}
          <div div className='spending'>
            <div className='right'>
              <h5>Incoming</h5>
              <div className='amount green'>
              <p>${incoming}</p>
            </div>
            </div>
            <div className='left'>
              <h5>Outgoing</h5>
              <div className='amount red'>
              <p>${outgoing}</p>
            </div>
          </div>
          </div>
          {/* Remaining Balance */}
          <div>
            <h5>Remaining Balance</h5>
            <p>${remainingBalance}</p>
          </div>
          {/* Transaction Details */}
          
            <h5>Transaction Details</h5>
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