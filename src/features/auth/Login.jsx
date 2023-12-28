import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth-form-wrapper'>
      <h1>SIGN IN</h1>
      <form action="">
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password '/>
      </form>
      <button className='btn'>
        Sing In
      </button>
      <div className='member'>
        Don't have an account? <Link to="/register">Register Here</Link>
      </div>
    </div>
  )
}

export default Login
