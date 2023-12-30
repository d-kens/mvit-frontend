import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousResults = ({ userId }) => {

  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/classification/classification_results/${userId}?page=${currentPage}&per_page=${perPage}`
        );

        if(response.status === 200) {
          setResults(response.data.results);
          setTotalPages(response.data.total_pages);
        } else if (response.status === 204) {
          // No Content
          setResults([]);
          setTotalPages(0);
        }


      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('User not found');
        } else {
          console.error('Error fetching classification results:', error);
          setError('Internal server error');
        }
      }
    }

    fetchResults();
  }, [userId, currentPage, perPage]);


  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div className="prev-results">
        <h3>Previous Classification Results</h3>

        {error ? (
          <p style={{ color: 'red'}}>{error}</p>
        ): (
          <div className="results">
            {results && results.length > 0 ? (
              results.map((result, index) => (
                <div key={index} className='prev-result-card'>
                  <p>Disease: {result.result_value}</p>
                  <p className='timestamp'>{new Date(result.timestamp).toLocaleDateString()}</p>
                  <div className='prev-image-container'>
                    <img src={result.image_url} alt={`Classified Image ${index + 1}`} />
                  </div>
                </div>
              ))
            ) : (
              <p>No previous classification results found.</p>
            )}
          </div>
        )}

        <div className="pagination-button">
          <button className='btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            prev
          </button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <button className='btn' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            next
          </button>
        </div>
    </div>
  )
}

export default PreviousResults


/*

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

*/