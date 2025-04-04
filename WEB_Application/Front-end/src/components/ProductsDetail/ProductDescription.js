import React from "react";
import StarRating from "./StarRating";

const ProductDescription = ({ product }) => (
    <div className="product_description">
        <h1>{product.name}</h1>
        <div className="product_info">
            {/* Conditionally render price */}
            <span className="price">
                {product.price ? `${product.price}$` : "Price not available"} |
            </span>
            <span className="stars">
                <StarRating initialRating={product.initialRating} />
            </span>
            <span className="reviews">{product.reviews} reviews</span>
        </div>
        <p>{product.description}</p>
    </div>
);

export default ProductDescription;
