import React from 'react'
import ClassificationResults from './ClassificationResults'

function Classify() {
  return (
    <div className='classification-card'>
        <form>
            <label>
                Select Image to Classify:
            </label>
            <input type="file" accept="image/*"/>
            <button type="submit" className='btn'>Upload Image</button>
        </form>

        <div className='classification-result-container'>
            <p>Disease Detected: Early Blight</p>

            <div className="image-container">
                <img src="/img/tomatoLeaf.JPG" alt="Classified Image" />
            </div>
        </div>

        <div className='prev-results'>
            <h3>Previous Results</h3>
            <ClassificationResults />
        </div>
    </div>
  )
}

export default Classify