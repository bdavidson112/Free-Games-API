import './App.css';
import axios from 'axios'; // Use ES module syntax for React
import React from 'react';
import Home from './components/Home';
import Game from './components/Game';
import Games from './components/Games';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // Updated import for v6



const apiUrl = process.env.REACT_APP_API_URL;

async function fetchData() {
  const response = await fetch(`${apiUrl}/endpoint`);
  const data = await response.json();
  console.log(data);
}


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;