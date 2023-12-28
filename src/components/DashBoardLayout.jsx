import React from 'react'
import Classify from './Classify'
import ClassificationResults from './ClassificationResults'

const DashBoardLayout = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-header">
          <div>
            <h3>Welcome</h3>
            <p className='user'>Dickens</p>
          </div>

          <button className='btn'>Logout</button>
        </div>

        <div className="dashboard-body">
          <div className='db-left'>
            This is the left side of the dashboard bosy
          </div>

          <div className='db-right'>
            <Classify />
          </div>
        </div>


    </div>
  )
}

export default DashBoardLayout