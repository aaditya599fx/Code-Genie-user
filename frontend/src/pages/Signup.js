import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({ name: '', email: '', password: '' })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
<<<<<<< HEAD
            const url = `https://code-genie-user-api.vercel.app/auth/signup`;
            const response = await fetch(url, {
=======
            const API = process.env.REACT_APP_API_URL || 'http://localhost:8080';
            const response = await fetch(`${API}/auth/signup`, {
>>>>>>> a1ac3ed5 (Updated frontend + backend code)
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, errors } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => navigate('/login'), 700);
            } else if (errors && Array.isArray(errors) && errors.length) {
                handleError(errors[0]);
            } else {
                handleError(message || 'Signup failed');
            }
        } catch (err) {
            handleError(err.message || err);
        }
    }
    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input onChange={handleChange} type='text' name='name' autoFocus placeholder='Enter your name...' value={signupInfo.name} />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input onChange={handleChange} type='email' name='email' placeholder='Enter your email...' value={signupInfo.email} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input onChange={handleChange} type='password' name='password' placeholder='Enter your password...' value={signupInfo.password} />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account ? <Link to="/login">Login</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup
