import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "../../styles/NavigationBar/navbar.css";
import SearchFilter from "../FilterComponents/SearchFilter";
import { useCart } from "./Cart";

const Navbar = ({ onSearch, isLoggedIn, onLogout }) => {
  const { cartCount } = useCart();

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
        {/* User Login/Register & Profile */}
        <div className="nav_user">
          {isLoggedIn ? (
            <button className="user_button" onClick={onLogout}>Logout</button>
          ) : (
            <>
              <a href="/login" className="user_button">Sign In</a>
              <a href="/register" className="user_button">Register</a>
            </>
          )}
          <a href="/account" className="user_icon" aria-label="User Account">
            <FaUser />
          </a>
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
