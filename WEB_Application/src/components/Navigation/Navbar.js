import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../../styles/NavigationBar/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar_left">
        <a href="/" className="logo">Round Table</a>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar_center">
        <ul className="nav_links">
          <li><a href="/">Shop Now</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Right: User & Cart Section */}
      <div className="navbar_right">
        {/* User Login/Register & Profile */}
        <div className="nav_user">
          <a href="/profile" className="user_button">Sign In</a>
          <a href="/register" className="user_button">Register</a>
          <a href="/account" className="user_icon" aria-label="User Account">
            <FaUser />
          </a>
        </div>
        {/* Shopping Cart */}
        <div className="cart">
            <a href="/cart" className="cart_icon" aria-label="Shopping Cart">
              <FaShoppingCart />
              <span className="cart_count">0</span>
            </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
