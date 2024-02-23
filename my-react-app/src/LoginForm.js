import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, useNavigate } from 'react-router-dom';


const UserLogin = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/account')
    }
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">User Login</h2>
                    <form action="/login" method="POST">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder='johndoe@gmail.com'required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder='enter your password'required />
                        </div>
                        <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="text-center mt-3">
                       <p>
                        Don't have an account?{' '}
                        <NavLink to='/signup'>
                        sign up{' '}
                        </NavLink>
                        <br/>
                        Forgotten password?{' '}
                        <NavLink to='/reset-password'>
                        Password_reset
                        </NavLink>
                        
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserLogin;
