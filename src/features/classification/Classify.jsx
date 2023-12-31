import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const CLASSIFY_URL = '/classification/classify'

function Classify() {
  const axiosPrivate = useAxiosPrivate();

  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [requestError, setRequestError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // clear any previous file error when a new file is selected
    setFileError(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setFileError("Please select an image");
      setRequestError(null); // Clear any previous request error
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axiosPrivate.post(CLASSIFY_URL, formData);
      setResult(response.data);
      // clear any previous error on successfull response
      setRequestError(null)
    } catch (error) {
      console.error('Error during classification:', error);
      setRequestError('Error during classification. Please try again'); 
      setResult(null)
    }
  };


  return (
    <div className='classify-card'>
        <div className='classify-form-wrapper'>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Select Image to Classify:
                </label>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {fileError && <p style={{ color: 'red', marginBottom: '3px', marginTop: '3px'}}>{fileError}</p>}
                <button type="submit" className='btn'>Upload Image</button>
            </form>
        </div>

        {result && (
            <div className='classify-result-container'>
                <div className='classify-result'>
                    <p><span>Detected</span>: { result.label }</p>
                </div>

                <div className="classify-image-container">
                    <img src={result.image_url} alt="Classified Image" />
                </div>
            </div>
        )}

        {requestError && <p style={{ color: 'red', marginTop: '30px'}}>{requestError}</p>}

    </div>
  )
}

export default Classify