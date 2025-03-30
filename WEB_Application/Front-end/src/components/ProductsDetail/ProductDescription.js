
import React from "react";
import StarRating from "./StarRating"; 

const ProductDescription = ({ product }) => (
    <div className="product_description">
        <h1>{product.name}</h1>
        <div className="product_info">
            <span className="price">{product.price}$ |</span> 
            <span className="stars">
                <StarRating initialRating={product.initialRating} />
            </span>
            <span className="reviews">{product.reviews} reviews</span>
        </div>
        <p>{product.description}</p>
    </div>
);

export default ProductDescription;
