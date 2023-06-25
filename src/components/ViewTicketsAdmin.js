import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTicketsAdmin = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1.0/moviebooking/tickets/list/');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>View Tickets (Admin)</h2>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Number of Tickets</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.movie.movie_name}</td>
              <td>{ticket.num_tickets}</td>
              <td>{ticket.seat_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTicketsAdmin;
