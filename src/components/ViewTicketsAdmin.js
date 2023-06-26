import React, { useState } from 'react';
import axios from 'axios';

function ViewTicketsAdmin() {
  const [tickets, setTickets] = useState([]);
  const [error,setErrors] = useState([]);
  fetchTickets();
  async function fetchTickets() {
    try {
      const username = localStorage.getItem('username');

      const response = await axios.get('http://localhost:8000/api/v1.0/moviebooking/tickets/list/', {
        params:{
          username : username,
      }
      });
      if (response.data.error === ""){
        setTickets(response.data.ticket);
        setErrors('')
      }
      else{
        setErrors(response.data.error)
        throw new Error(error, response.data);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h2>View Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Theatre Name</th>
            <th>Number of Tickets</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.movie.movie_name}</td>
              <td>{ticket.movie.theatre_name}</td>
              <td>{ticket.num_tickets}</td>
              <td>{ticket.seat_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTicketsAdmin;

