import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Details from './Details';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<h1>Sorry Page not found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
