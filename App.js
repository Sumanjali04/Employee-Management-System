import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AddEmployee from './pages/AddEmployee';
import SearchEmployee from './pages/SearchEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import ViewEmployees from './pages/ViewEmployees';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Patient Record System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/add">Add Employee</Nav.Link>
            <Nav.Link as={Link} to="/search">Search Employee</Nav.Link>
            <Nav.Link as={Link} to="/update">Update Employee</Nav.Link>
            <Nav.Link as={Link} to="/view">View Employees</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/add" element={<AddEmployee/>} />
          <Route path="/search" element={<SearchEmployee/>} />
          <Route path="/update" element={<UpdateEmployee />} />
          <Route path="/view" element={<ViewEmployees />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

          
