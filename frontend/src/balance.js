import { useState, useEffect } from 'react';
import axios from 'axios';


function Balance() {

  useEffect(() => {
    async function getBalance() {
      try {
        const response = await axios.get('http://localhost:5000/balance') 
	if (response.status === 200) { setBalance(response.data) }
      } catch(err) {
        console.log(err.message)
      }
    }

    getBalance();
  })

  const [balance, setBalance] = useState('');
  return (
    <div className="balance">
      {!balance && <h1>00</h1>}
      {balance && <h1>{balance}</h1>}
    </div>
  )
}

export default Balance;
