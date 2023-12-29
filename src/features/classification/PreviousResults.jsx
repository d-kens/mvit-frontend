import React from 'react'

const PreviousResults = () => {
  return (
    <div className="prev-results">
        <h3>Previous Classification Results</h3>
        <div className="results">
          <div className='prev-result-card'>
            <p>Disease: Early Blight</p>
            <p className='timestamp'>Jan-12-2023</p>
            <div className='prev-image-container'>
              <img src="/img/tomatoLeaf.JPG" alt="Classified Image" />
            </div>
          </div>

          <div className='prev-result-card'>
            <p>Disease: Early Blight</p>
            <p className='timestamp'>Jan-12-2023</p>
            <div className='prev-image-container'>
              <img src="/img/tomatoLeaf.JPG" alt="Classified Image" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PreviousResults