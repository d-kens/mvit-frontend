import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
// import PersistLogin from './components/PersistLogin'
import DashBoardLayout from './components/DashBoardLayout'
import RequireAuth from './components/RequireAuth'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import Classify from './features/classification/Classify'
import PreviousResults from './features/classification/PreviousResults'
import useAuth from './hooks/useAuth'


function App() {
  const { auth } = useAuth();
  const userId = auth?.userId;
  const userName = auth?.userName

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path="register" element={<Register />} />

        
        <Route element={< RequireAuth />}> {/* protects all routes within it */}
          { /* Protected Routes */ }
          <Route path='/dash' element={<DashBoardLayout userName={userName} />}>
            <Route index element={<Classify />} />
            <Route path='previous-results' element={<PreviousResults userId={userId} />} />
          </Route>
        </Route>
        

      </Route>

    </Routes>
  )
}

export default App
