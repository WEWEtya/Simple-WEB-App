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

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products!', error));
    }, []);

    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter(product =>
                product.type.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        if (searchQuery) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [products, searchQuery, selectedCategory]);

    return (
        <div>
            <ProductsList products={filteredProducts} />
        </div>
    );
};

export default ProductsListPage;