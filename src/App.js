import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import TicketBooking from './components/TicketBooking';
import Login from './components/Login';
import AdminView from './components/AdminView';

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
          <Link to={`/tickets/list/viewticket`} className="btn btn-primary">View Tickets</Link>
          <Link to="/movies/delete/deleteticket" className="btn btn-primary">Delete Movie</Link>
          <Link to="/movies/update/updateticket" className="btn btn-primary">Update Ticket</Link>
        </div>

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/movies/search" element={<MovieSearch />} />
          <Route exact path="/tickets/add" element={<TicketBooking />} />
          <Route exact path="/tickets/list/:value" element={<AdminView />} />
          <Route exact path="/movies/delete/:value" element={<AdminView />} />
          <Route exact path="/movies/update/:value" element={<AdminView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
