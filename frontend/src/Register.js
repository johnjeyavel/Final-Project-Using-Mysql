import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SignUpValidation from './SignUpValidation'
import axios from 'axios'


const Register = () => {

    const [value,setValue] = useState({
        email:'',
        password:'',
        name:''
    })

    const [error,setError] = useState({});
    const navigate = useNavigate();


const handleInput = (event)=>{
  setValue(prev => ({...prev, [event.target.name]:[event.target.value]}))
}

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(SignUpValidation(value));
        if(error.name === "" && error.email === "" && error.password === "" ){
          axios.post('http://localhost:8087/Register',value)
          .then(res => {     
            navigate('/');
          })
          .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25 '>
        <h3 className='text-center'>Sign Up</h3>
      <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
              <label htmlFor='name' className='fw-bold'>Name</label>
              <input type='text' placeholder='Enter Your Name' className='form-control rounded-0' name="name" onChange={handleInput}/>
              {error.name && <span className='text-danger'>{error.name}</span>}
          </div>
          <div className='mb-3'>
                <label htmlFor='email' className='fw-bold'>Email</label>
                <input type='email' placeholder='Enter Your Email' className='form-control rounded-0' name="email" onChange={handleInput}/>
                {error.email && <span className='text-danger'>{error.email}</span>} 
            </div>
          <div className='mb-3'>
              <label htmlFor='password' className='fw-bold'>Password</label>
              <input type='password' placeholder='Enter Your Password'  className='form-control rounded-0' name="password" onChange={handleInput}/>
              {error.password && <span className='text-danger'>{error.password}</span>} 
          </div>
          <button type='submit' className='btn btn-success w-100 mb-3 fw-bold'>Sign Up</button>
          <br/>
          <Link to="/" className='btn btn-default border w-100 text-decoration-none'>Log In</Link>
                
      </form>
    </div>
  </div>
  )
}

export default Register
