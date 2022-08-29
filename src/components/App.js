import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>Sorry Page did not load</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
