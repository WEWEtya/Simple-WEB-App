import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Filters/searchFilter.css"

const SearchFilter = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchOrKeyPress = (event) => {
        if(event.key === "Enter" || event.type === "click"){
            if(searchQuery.trim() !== ""){  // Check if searchQuery is not just empty spaces
                console.log("Searching for:", searchQuery);
                navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
                onSearch(searchQuery);
            } else {
                navigate("/products");
                onSearch("");  // Clear the search if empty
            }
        }
    }

    return (
        <div className="search_input_container">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchOrKeyPress}
                className="search_input"
            />
            
            <button className="search_button" onClick={handleSearchOrKeyPress}>Search</button>
        </div>
    );
};

export default SearchFilter;
