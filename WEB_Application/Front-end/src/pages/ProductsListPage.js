import React, { useState, useEffect } from "react";
import ProductsList from '../components/ReusableGlobalComponents/Products.js';
import CategoryFilter from "../components/FilterComponents/CategoryFilter.js";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductsListPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const searchQuery = queryParams.get("search") || "";
    const selectedCategory = queryParams.get("category") || "";

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products', {
                    params: {
                        search: searchQuery,
                        category: selectedCategory
                    }
                });
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchFilteredProducts();
    }, [searchQuery, selectedCategory]); // Fetch products whenever searchQuery or selectedCategory changes

    return (
        <div>
            <CategoryFilter selectedCategory={selectedCategory} />
            <ProductsList products={filteredProducts} searchQuery={searchQuery} selectedCategory={selectedCategory} />
        </div>
    );
};

export default ProductsListPage;