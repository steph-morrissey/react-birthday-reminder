import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Brand href='#home'>Birthday Reminders</Navbar.Brand>
      <Nav className='mr-auto'>
        <Link to='/reminders'>Todays Birthdays</Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
