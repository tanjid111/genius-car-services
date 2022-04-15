import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        // this code navigate is moved inside handle register
        // navigate('/home')
        console.log('user', user);
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        // if (agree) {

        //if agree is not necessary as  the code already disables the register button if terms not agreed.
        await createUserWithEmailAndPassword(email, password)
        // }
        await updateProfile({ displayName: name });
        // alert('Updated profile');
        console.log('Updated profile');
        navigate('/home')

    }


    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input type="email" name="email" placeholder='Email Address' id="" required />
                <input type="password" name="password" placeholder='Your Password' id="" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />

            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;