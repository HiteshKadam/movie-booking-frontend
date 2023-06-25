import React, { useState } from 'react';
import axios from 'axios';

const DeleteMovie = () => {
  const [movieId, setMovieId] = useState('');
  const [movieName, setMovieName] = useState('');
  const [deleteStatus, setDeleteStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://localhost:8000/api/v1.0/moviebooking/${movieName}/delete/${movieId}/`);
      setDeleteStatus(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setDeleteStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while deleting the movie.');
      }
    }
  };

  return (
    <div>
      <h2>Delete Movie</h2>
      <form onSubmit={handleDelete}>
        <label>Movie ID:</label>
        <input type="number" value={movieId} onChange={(e) => setMovieId(e.target.value)} />

        <label>Movie Name:</label>
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />

        <button type="submit">Delete Movie</button>
      </form>

      {deleteStatus && <p>{deleteStatus}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default DeleteMovie;
