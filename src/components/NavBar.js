import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar
      variant='light'
      sticky='top'
      className='py-4 mb-3'
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <Navbar.Brand
        style={{ fontFamily: 'Concert One, cursive', color: '#e5c0dd' }}
      >
        BIRTHDAY REMINDERS.
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Link
          to='/reminders'
          className='px-2'
          style={{
            textDecoration: 'none',
            color: '#BAE5B4',
          }}
        >
          Todays Birthdays
        </Link>

        <Link
          to='/monthly'
          className='px-2'
          style={{
            textDecoration: 'none',
            color: '#B8E4E6',
          }}
        >
          Birthday by Month
        </Link>

        <Link
          to='/monthly'
          className='px-2'
          style={{
            textDecoration: 'none',
            color: '#EBD3A3',
          }}
        >
          Customise Reminders
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
