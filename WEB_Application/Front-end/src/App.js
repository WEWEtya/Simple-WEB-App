import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from './components/Navigation/Cart.js';

import ScrollToTop from './components/ReusableGlobalComponents/ScrollToTop.js'

import Navbar from './components/Navigation/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Account from './pages/ProfilePage.js';
import Cart from './pages/CartPage.js'

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs.js';
import AuthPage from './pages/AuthPage.js';


import ProductsListPage from './pages/ProductsListPage.js';
import ProductDetail from './pages/ProductDetailPage.js';



import './styles/global.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Navbar onSearch={setSearchQuery} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main>
          <Routes>
            {/* Define the correct route paths */}
            <Route path="/" element={<HomePage />} /> {/* Home page */}
            <Route path="/about" element={<AboutPage />} /> {/* About page */}
            <Route path="/contact" element={<ContactUs />}/> {/* Contact page */}
            
            <Route path="/products" element={<ProductsListPage 
                                                searchQuery={searchQuery}
                                                selectedCategory={selectedCategory}
                                                onSelectCategory={setSelectedCategory}
                                            />} /> {/* ProductsList page */}

            <Route path="/product/:id" element={<ProductDetail />} /> {/* ProductDetail page */}
            <Route path="/login" element={<AuthPage mode="login" setIsLoggedIn={setIsLoggedIn} />} /> {/* LogIn page */}
            <Route path="/register" element={<AuthPage mode="register" setIsLoggedIn={setIsLoggedIn} />} /> {/* Register page */}
            <Route path="/account" element={<Account />} /> {/* Profile page */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}
