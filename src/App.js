import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import TicketBooking from './components/TicketBooking';
import UpdateTicket from './components/UpdateTicket';
import ViewTicketsAdmin from './components/ViewTicketsAdmin';
import DeleteMovie from './components/DeleteMovie';

function App() {
  return (
    <Router>
      <div>
        <h1>Movie Booking App</h1>
        <div className="btn-group">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/movies" className="btn btn-primary">Movie List</Link>
          <Link to="/movies/search" className="btn btn-primary">Movie Search</Link>
          <Link to="/tickets/add" className="btn btn-primary">Book Ticket</Link>
          <Link to="/tickets/list/admin" className="btn btn-primary">Admin View</Link>
          <Link to="/movies/delete" className="btn btn-primary">Delete Movie</Link>
          <Link to="/movies/update" className="btn btn-primary">Update Ticket</Link>
        </div>

        <Routes>
          <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/movies/search" element={<MovieSearch />} />
          <Route exact path="/tickets/add" element={<TicketBooking />} />
          <Route exact path="/tickets/list/admin" element={<ViewTicketsAdmin />} />
          <Route exact path="/movies/delete" element={<DeleteMovie />} />
          <Route exact path="/movies/update" element={<UpdateTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
