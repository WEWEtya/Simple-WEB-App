import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../styles/HomePage/products.css';
import CategoryFilter from "../HomePageComponents/CategoryFilter.js";  // Import CategoryFilter

function ProductsList({ selectedCategory }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching products!', error));
    }, []);

    // Function to filter products based on selected category
    useEffect(() => {
        if (!selectedCategory) {
            setFilteredProducts(products); // Show all products when no filter is selected
        } else {
            setFilteredProducts(products.filter(product => 
                product.type.toLowerCase() === selectedCategory.toLowerCase()
            ));
        }
    }, [selectedCategory, products]);

    return (
        <div className="products_container">

            <div className="product_grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                    <Link 
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="product_item_link"
                    >
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
                        <p>No products available for this category.</p>
                    )}                
            </div>
        </div>
    );
}

export default ProductsList;
