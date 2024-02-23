import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, useNavigate } from 'react-router-dom';

const PasswordReset = () => {
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">PasswordReset</h2>
                    <form action="/login" method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder='johndoe@gmail.com' required />
                        </div>
                       
                        <button type="submit" className="btn btn-primary btn-block">Password Reset</button>
                    </form>
                    <div className="text-center mt-3">
                       <p>
                       
                        Password Reset now {' '}
                        <NavLink to='/login'>
                        Login
                        </NavLink>
                        
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PasswordReset;
