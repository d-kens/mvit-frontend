import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from '../../api/axios'
import useAuth from '../../hooks/useAuth'

const LOGIN_URL = '/auth/login'

const Login = () => {
  const { setAuth } = useAuth(); // when succesfull auth during login, set a new auth state and store it in the global state
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname  || "/"

  // Check if the user is coming from the root page
  const redirectTo = from === "/" ? "/dash" : from;

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        } 
      })

      const accessToken = response?.data?.access_token;
      const refreshToken = response?.data?.refresh_token;
      const userName = response?.data?.user_name;
      const userId = response?.data?.id;

      setAuth({
        userName,
        userId,
        accessToken,
        refreshToken
      })

      navigate(redirectTo, { replace: true })

    } catch (error) {
      if(!error?.response) { 
        setError('No server response')
      } else if (error.response?.status === 401) {
        setError('Unauthorized')
      } else {
        setError('Login Failed')
      }
    }
  }


  return (
    <div className='auth-form-wrapper'>
      <h1>SIGN IN</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type='submit' className='btn'>
          Sign Up
        </button>
      </form>

      <div className='member'>
        Don't have an account? <Link to="/register">Register Here</Link>
      </div>
    </div>
  )
}

export default Login

