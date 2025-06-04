import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import '../../styles/HomePage/products.css';


const ProductsList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();

    // Fetching products from API
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => console.error('Error fetching products!', error));
    }, []);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('search');
        let filtered = products;

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(product =>
                product.type.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Filter by search query
        if (query) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [location.search, selectedCategory, products]);

    return (
        <div className="products_container">
            <div className="product_grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product_item_link">
                            <div className="product_item">
                                <div className="product_image_wrapper">
                                    <img 
                                    src={product.images[0]?.imageUrl} 
                                    alt={product.name} 
                                    className="products_image" />
                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.price}$</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No products found for your search.</p>
                )}
            </div>
        </div>
    );
};

export default ProductsList;
