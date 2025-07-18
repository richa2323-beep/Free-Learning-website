import React from 'react';


import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About'; 
import Footer from './Components/Footer';
import './App.css';
import Login from './pages/Login';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} /> {/* new route */}
        <Route path="/login" element={<Login />} /> {/* new route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
