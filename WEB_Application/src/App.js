import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navigation/Navbar.js';
import Footer from './components/Footer/Footer.js';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

import './styles/global.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Define the correct route paths */}
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
