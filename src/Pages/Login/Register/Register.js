import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin =()=>{
        navigate('/login')
    }
    const handleRegister =(event)=>{
        event.preventDefault()
        // console.log(event.target.email)
        const name = event.target.value
        const emali = event.target.value
        const password = event.target.value
      }
    return (
        <div className='register-form'>
            <h1 className='text-center mt-3 mb-3 text-primary'>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your name' />
                <input type="email" id='' name='email' placeholder='Email Address' required/> 
                <input type="password " name='password' id='' placeholder='Password' required />
                <input type="submit" value='Register' />
            </form>
            <p>Already have an account ? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;