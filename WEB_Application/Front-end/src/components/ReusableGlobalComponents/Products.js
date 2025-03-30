import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../styles/HomePage/products.css';

function ProductsList(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
            axios.get('http://localhost:8080/api/products')
                .then(response => {
                    setProducts(response.data);
            })
                .catch(error => {
                    console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="products_container">
            <h1>Products</h1>
            <h2>Explore our diverse range of quality products</h2>
            <div className="product_grid">
                {products.map((product) => (
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
                ))}
            </div>
        </div>
    );
};
    

export default ProductsList;
