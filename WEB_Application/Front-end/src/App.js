import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ScrollToTop from './components/ReusableGlobalComponents/ScrollToTop.js'

import Navbar from './components/Navigation/Navbar.js';
import Footer from './components/Footer/Footer.js';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs.js';
import AuthPage from './pages/AuthPage.js';


import ProductsList from './pages/ProductsListPage.js';
import ProductDetail from './pages/ProductDetailPage.js';



import './styles/global.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Define the correct route paths */}
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
          <Route path="/contact" element={<ContactUs />}/> {/* Contact page */}
          <Route path="/products" element={<ProductsList />} /> {/* ProductsList page */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* ProductDetail page */}
          <Route path="/login" element={<AuthPage mode="login" />} /> {/* LogIn page */}
          <Route path="/register" element={<AuthPage mode="register" />} /> {/* Register page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
