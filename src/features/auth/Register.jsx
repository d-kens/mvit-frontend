import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api/axios'



const REGISTER_USER_URL = '/auth/register'

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { confirmPassword, ...dataToSend } = formData;

    try {
      // Send data as JSON to the server
      const response = await axios.post(REGISTER_USER_URL, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Handle successful registration
      console.log('Registration successful', response.data);

      // Redirect to the login page
      navigate('/login');

    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred while registering');
      }
    }
  }

  console.log(formData)


  return (
    <div className='auth-form-wrapper'>
        <h1>SIGN UP</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='First Name'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder='Last Name'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
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
          <input
            type="password"
            placeholder='Confirm Password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type='submit' className='btn'>
            Sign Up
          </button>
        </form>
        <div className='member'>
            Already have an account? <Link to="/login">Login Here</Link>
        </div>
    </div>
  )
}

export default Register
