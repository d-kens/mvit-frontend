import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashBoardLayout from './components/DashBoardLayout'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />

        { /* Protected Routes */ }
        <Route path='/dash' element={<DashBoardLayout />}>
          
        </Route>

      </Route>

    </Routes>
  )
}

export default App
