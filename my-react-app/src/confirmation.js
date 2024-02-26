import { NavLink } from 'react-router-dom';
import './confirmation.css'
import { useState } from 'react';
import { auth } from './firebase'

function Confirm() {
    const [verified, setVerified] = useState(false)
    auth.onAuthStateChanged((user) => {
        if (user) {
            if (user.emailVerified) {
                console.log('user verified')
                setVerified(true)
            }
        } else {
            console.log('user is not authenticated');
            setVerified(false)
        }
    });
    return (
        <div className='confirmation'>
            
            
            { verified ? (
                <div>
                <h4>Congratulations, you can now login.</h4>
                <NavLink to="/login">
                <button>Login</button>
            </NavLink>
            </div>
            ) : (
                <div>
                    <h4>An email verification link has been sent to you, please check your email.</h4>
                    <div id='unverified'>Login</div>
                    <h6>Kindly referesh after verification</h6>
                </div>
            )}
           
        </div>
       
    )
}

export default Confirm;