import React from 'react';
import './transaction.css'

const TransactionDetails = () => {
  // Define dynamic values
  const balance = 5000.00;
  const incoming = 2000;
  const outgoing = 1000;
  const remainingBalance = balance - outgoing;
  const transactions = [
    { id: 1, description: 'New laptop' },
    { id: 2, description: 'hotel booking' },
    { id: 3, description: 'Doreen emma sam' }
    // Add more transactions as needed
  ];

  return (
    
    <div className='transaction' >
      <div className='navigation' >
      <p>MyWallet</p>
      <p>January 2024</p>
    
      <div className='oval'>current Balance</div>
      <div className='balance'>
        <div className=''>
          {/* Balance Circle */}
          <div >
            ${balance}
            <span>.00</span>
          </div>
          {/* Incoming and Outgoing Finances */}
          <div className='spending'>
            <div className='right'>
              <h5>Incoming</h5>
              <p>${incoming}</p>
            </div>
            <div className='left'>
              <h5>Outgoing</h5>
              <p>${outgoing}</p>
            </div>
          </div>
          {/* Remaining Balance */}
          <div >
            <h5>Remaining Balance</h5>
            <p>${remainingBalance}</p>
          </div>
          {/* Transaction Details */}
          <div className='payments' >
            <h5>Transactions</h5>
            <ul >
              <div className='description'>
              {transactions.map(transaction => (
                <li key={transaction.id}>
                  Transaction {transaction.id}: {transaction.description}
                </li>
              ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TransactionDetails;
