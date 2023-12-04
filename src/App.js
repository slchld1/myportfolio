import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
