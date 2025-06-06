import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import '../../styles/HomePage/products.css';


const ProductsList = ({ products = [] }) => {
    const [fetchedProducts, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
                console.log("Fetched products:", response.data);
            })
            .catch(error => console.error('Error fetching products!', error));
    }, []);

    return (
        <div className="products_container">
            <div className="product_grid">
                {fetchedProducts.length > 0 ? (
                    fetchedProducts.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="product_item_link">
                            <div className="product_item">
                                <div className="product_image_wrapper">
                                    <img src={product.images[0]?.imageUrl} alt={product.name} className="products_image" />
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
