import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../../styles/NavigationBar/navbar.css";
import SearchFilter from "../FilterComponents/SearchFilter";
import { useCart } from "./Cart";

const Navbar = ({ onSearch, isLoggedIn, onLogout }) => {
  const { cartCount } = useCart();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleUserIconClick = () => {
    setShowUserMenu((prev) => !prev); // Toggle open/close
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar_left">
        <a href="/" className="logo">Round Table</a>
      </div>

      {/* Center: Navigation Links and Search Bar */}
      <div className="navbar_center">
        {/* Navigation Links Wrapper for grid layout */}
        <ul className="navbar_links_wrapper">
          <li><a href="/">Shop Now</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Search Filter below links */}
        <div className="search_filter">
          <SearchFilter onSearch={onSearch} />
        </div>
      </div>

      {/* Right: User Section */}
      <div className="navbar_right">
        <div className="nav_user">
          <span
            className="user_icon"
            onClick={handleUserIconClick}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <FaUser />
          </span>
          {showUserMenu && !isLoggedIn && (
            <div className="user-menu-dropdown">
              <a href="/login" className="user_button">Sign In</a>
              <a href="/register" className="user_button">Register</a>
            </div>
          )}
          {showUserMenu && isLoggedIn && (
            <div className="user-menu-dropdown">
              <button className="user_button" onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>
        {/* Shopping Cart */}
        <div className="cart">
            <a href="/cart" className="cart_icon" aria-label="Shopping Cart">
              <FaShoppingCart />
              <span className="cart_count">{cartCount}</span>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
