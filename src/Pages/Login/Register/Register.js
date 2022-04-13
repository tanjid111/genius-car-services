import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />

                <input type="email" name="email" placeholder='Email Address' id="" required />

                <input type="password" name="password" placeholder='Your Password' id="" required />
                <input type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;