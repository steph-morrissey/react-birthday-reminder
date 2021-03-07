import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <h1>NavBar</h1>
      <Routes />
    </Router>
  );
}

export default App;
