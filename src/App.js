import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './Routes';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
