import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getIdToken, sendEmailVerification } from 'firebase/auth'
import { auth } from './firebase';
import axios from 'axios';
import "./Style.css"

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    networkError: '',
    emailInUse: '',
  });

  const validateForm = () => {
    const errors = {};
    const { email, password, confirmPassword, firstname, lastname, phonenumber } = formData;

    // Validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    // Validate firstname
    if (!firstname) {
      errors.firstname = 'First name is required';
    }

    // Validate lastname
    if (!lastname) {
      errors.lastname = 'Last name is required';
    }

    // Validate phonenumber
    if (!phonenumber) {
      errors.phonenumber = 'Phone number is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await sendEmailVerification(userCredentials.user);
      const user = userCredentials.user;
      const idToken = await getIdToken(user);
      localStorage.setItem('token', idToken);

      const params = { ...formData };
      delete params.password;
      delete params.confirmPassword;

      const options = { headers: { Authorization: `Bearer ${idToken}`, 'Content-Type': 'application/json' } };
      await axios.post('http://localhost:5000/create_user', params, options);

      navigate('/confirmation');

      
    } catch (err) {
      console.error(err.code);
      if (err.code === 'auth/email-already-in-use') {
        setFormErrors({ ...formErrors, emailInUse: 'This email is already in use' });
      } else if (err.code === 'auth/network-request-failed') {
        setFormErrors({ ...formErrors, networkError: 'Please check your network connection' });
      }
    }
  };

  return (
    <div className="container">
      <h1>Be a HopeFusion hero</h1>
      <form onSubmit={onSubmit}>
      <div className="form-group">
      <label htmlFor="firstname">First Name:</label>
      <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
      {formErrors.firstname && <span className="error">{formErrors.firstname}</span>}
    </div>
        
        {/* Add similar form-group elements for lastname, email, phone number, password, confirm password */}
        <div className="form-group">
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        {formErrors.lastname && <span className="error">{formErrors.lastname}</span>}
        </div>

        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div className="form-group">
        <label htmlFor="phonenumber">Phone Number:</label>
        <input type="text" className="form-control" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
        {formErrors.phonenumber && <span className="error">{formErrors.phonenumber}</span>}
        </div>

        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
        {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>

        <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
        </div>


        <button type="submit" className="btn btn-primary">Register</button>
        <p>
          Already have an account?{' '}
          <NavLink to='/login'>Login</NavLink>
        </p>

        {formErrors.networkError && <span className="error">{formErrors.networkError}</span>}
        {formErrors.emailInUse && <span className="error">{formErrors.emailInUse}</span>}
      </form>
    </div>
  );
};

export default UserRegistrationForm;
