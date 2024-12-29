import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddEmployee from './pages/AddEmployee';
import SearchEmployee from './pages/SearchEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import ViewEmployees from './pages/ViewEmployees';

function App() {
    return (
      <Router>
        <div>
          <h1>Employee Management System</h1>
          <nav>
            <ul>
              <li><Link to="/add">Add Employee</Link></li>
              <li><Link to="/search">Search Employee</Link></li>
              <li><Link to="/update">Update Employee</Link></li>
              <li><Link to="/view">View All Employees</Link></li> {/* New link */}
            </ul>
          </nav>
          <Routes>
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/search" element={<SearchEmployee />} />
            <Route path="/update" element={<UpdateEmployee />} />
            <Route path="/view" element={<ViewEmployees />} /> {/* New route */}
          </Routes>
        </div>
      </Router>
    );
  }

export default App;
