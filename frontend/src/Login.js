import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginValidation from './LoginValidation';
import axios from 'axios'

const Login = () => {

const [value,setValue] = useState({
    email:'',
    password:''
})

const [error,setError] = useState({});
const navigate = useNavigate();


const handleInput = (event)=>{
  setValue(prev => ({...prev, [event.target.name]:[event.target.value]}))
}


const handleSubmit = (e)=>{
    e.preventDefault();
    setError(LoginValidation(value));
    if(error.email === "" && error.password === "" ){
      axios.post('http://localhost:8087/login',value)
      .then(res => {     
      if(res.data === "success"){
        navigate("/home")
      }else{
        alert("No Record Exist")
      }
      })
      .catch(err => console.log(err));
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25 '>
      <h3 className='text-center'>Sign In</h3>
        <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email' className='fw-bold'>Email</label>
                <input type='email' placeholder='Enter Your Email' className='form-control rounded-0' name="email" onChange={handleInput}/>
               {error.email && <span className='text-danger'>{error.email}</span>} 
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='fw-bold'>Password</label>
                <input type='password' placeholder='Enter Your Password'  className='form-control rounded-0'  name="password" onChange={handleInput}/>
                {error.password && <span className='text-danger'>{error.password}</span>} 
            </div>
            <button type='submit' className='btn btn-success w-100 mb-3 fw-bold'>Log In</button>
            <br/>
            <Link to="/Register" className='btn btn-default border w-100 text-decoration-none'>Create Account</Link>
                 
        </form>
      </div>
    </div>
  )
}

export default Login;
// https://bespoke-halva-09d55a.netlify.app/