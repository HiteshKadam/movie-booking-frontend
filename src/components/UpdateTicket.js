import React, { useState } from 'react';
import axios from 'axios';

const UpdateTicket = () => {
  const [movieId, setMovieId] = useState('');
  const [movieName, setMovieName] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/v1.0/moviebooking/${movieName}/update/${movieId}/`, {
        seats_available: seatsAvailable
      });
      setUpdateStatus(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setUpdateStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while updating the ticket.');
      }
    }
  };

  return (
    <div>
      <h2>Update Ticket</h2>
      <form onSubmit={handleUpdate}>
        <label>Movie ID:</label>
        <input type="number" value={movieId} onChange={(e) => setMovieId(e.target.value)} />

        <label>Movie Name:</label>
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />

        <label>Seats Available:</label>
        <input type="number" value={seatsAvailable} onChange={(e) => setSeatsAvailable(e.target.value)} />

        <button type="submit">Update Ticket</button>
      </form>

      {updateStatus && <p>{updateStatus}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UpdateTicket;
