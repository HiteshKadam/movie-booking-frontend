import React, { useState } from 'react';
import axios from 'axios';

const TicketBooking = () => {
  const [movieName, setMovieName] = useState('');
  const [numTickets, setNumTickets] = useState('');
  const [seatNumber, setSeatNumber] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBooking = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8000/api/v1.0/moviebooking/${movieName}/add/`, {
        num_tickets: numTickets,
        seat_number: seatNumber
      });
      setBookingStatus(`Tickets booked successfully! Movie: ${response.data.movie.movie_name}, Tickets: ${response.data.ticket.num_tickets}`);
      setErrorMessage('');
    } catch (error) {
      setBookingStatus('');
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred while booking tickets.');
      }
    }
  };

  return (
    <div>
      <h2>Ticket Booking</h2>
      <form onSubmit={handleBooking}>
        <label>Movie Name:</label>
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />

        <label>Number of Tickets:</label>
        <input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} />

        <label>Seat Number:</label>
        <input type="text" value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />

        <button type="submit">Book Tickets</button>
      </form>

      {bookingStatus && <p>{bookingStatus}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default TicketBooking;