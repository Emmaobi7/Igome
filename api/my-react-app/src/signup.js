import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { NavLink, useNavigate } from 'react-router-dom';


const UserRegistrationForm = () => {
    return (
        <div className="container">
            <h1>User Registration Form</h1>
            <form action="/register" method="POST">
                <div className="form-group row">
                    <label htmlFor="firstname" className="col-sm-2 col-form-label">First Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder='John'required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lastname" className="col-sm-2 col-form-label">Last Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder='Doe' required />
                    </div>
                </div>

                
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" placeholder='johndoe@gmail.com' required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phonenumber" className="col-sm-2 col-form-label">Phone Number:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phonenumber" name="phonenumber" placeholder='+254 700000000'/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="password" name="password" placeholder='enter your password' required />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="confirm password" className="col-sm-2 col-form-label">confirm password:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="confirm password" name="confirm password" placeholder='confirm password'required />
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p>
                        Do have an account?{' '}
                        <NavLink to='/login'>
                        login{' '}
                        </NavLink>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserRegistrationForm;