import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth-form-wrapper'>
        <h1>SIGN UP</h1>
        <form action="">
            <input type="text" placeholder='firstname'/>
            <input type="text" placeholder='lastname'/>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password '/>
            <input type="password" placeholder='confirm password '/>
        </form>
        <button className='btn'>Sign Up</button>
        <div className='member'>
            Already have an account? <Link to="/login">Login Here</Link>
        </div>
    </div>
  )
}

export default Register