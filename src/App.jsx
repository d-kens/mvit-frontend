import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import DashBoardLayout from './components/DashBoardLayout'
import Classify from './features/classification/Classify'
import PreviousResults from './features/classification/PreviousResults'


function App() {
  const userId = 1;

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />

        { /* Protected Routes */ }
        <Route path='/dash' element={<DashBoardLayout />}>
          <Route index element={<Classify />} />

          <Route path='previous-results' element={<PreviousResults userId={userId} />} />
          
        </Route>

      </Route>

    </Routes>
  )
}

export default App
