import React from 'react';
import logo from '../../logo.svg';
import './Header.css'; 
import Navbar from 'react-bootstrap/Navbar'
import { Nav, FormControl, Form, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
            {/* <nav>
                <a href="/home">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/my-course">My Course</a>
            </nav> */}
            <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">Online Course</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/my-course">My Course</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        </div>
    );
};

export default Header;