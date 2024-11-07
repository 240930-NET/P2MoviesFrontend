import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {
  const location = useLocation();
  const item = location.state?.item; // Access the passed state

  return (
    <div>
      {item ? (
        <>
          <h2>{item.title}</h2>
          <p>year: {item.releaseYear}</p>
          {/* Display additional item details as needed */}
        </>
      ) : (
        <p>No item data available.</p>
      )}
    </div>
  );
}

export default MovieDetails;