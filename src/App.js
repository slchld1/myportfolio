import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@fontsource/open-sans";
import Home from './components/pages/Home';
import Preloader from './components/Preloader';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (

      <Router>
        <Preloader load={load}/>
        <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< Home />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
