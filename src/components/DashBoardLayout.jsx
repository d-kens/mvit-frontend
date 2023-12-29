import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const DashBoardLayout = () => {

  const location = useLocation();
  const isDashboardRoute = location.pathname === '/dash';
  const isPreviousResultsRoute = location.pathname === '/dash/previous-results';



  return (
    <div className='dashboard'>

      <div className="dashboard-left">
        <h1>Tomato Leaf Disease Classification</h1>
        <p>Powered by MobileViT Model</p>
      </div>

      <div className="dashboard-right">
        <div className="nav">
          <div>
            <h3>Welcome</h3>
            <p className='user'>Dickens</p>
          </div>
          <button className='btn'>Logout</button>
        </div>

        <Outlet />

        <div className='dash-links'>
          {isDashboardRoute && (
            <Link to="/dash/previous-results">View previous classification results</Link>
          )}

          {isPreviousResultsRoute && (
            <Link to="/dash">Go back</Link>
          )}
        </div>


      </div>

    </div>
  )
}

export default DashBoardLayout