// src/pages/ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom"; 

import "../styles/ProductDetailPage/productDetail.css";
import image from "../assets/images/HomePage/Products/Placeholder.png"; 

import ProductDescription from "../components/ProductsDetail/ProductDescription.js";
import ProductSelection from "../components/ProductsDetail/ProductSelection.js";
import ActionButtons from "../components/ProductsDetail/ActionButtons.js";
import ProductDetailsTab from "../components/ProductsDetail/ProductDetailsTab.js";

const productData = [
    { id: 1, name: 'Product 1', image: image, price: '$100', description: 'This is Product 1', reviews: 10, initialRating: 3 },
    { id: 2, name: 'Product 2', image: image, price: '$200', description: 'This is Product 2', reviews: 8, initialRating: 4 },
    { id: 3, name: 'Product 3', image: image, price: '$300', description: 'This is Product 3', reviews: 5, initialRating: 2 }, // Add other products
];

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = productData.find((p) => p.id === parseInt(id));

    if (!product) return <div>Product not found!</div>; 

    return (
        <div className="product_detail-container">
            <div className="product_detail-left">
                <ProductDescription product={product} />
                <ProductSelection />
                <ActionButtons />
                <ProductDetailsTab />
            </div>

            <div className="product_detail-right">
                <img src={product.image} alt={product.name} />
            </div>
        </div>
    );
};

export default ProductDetailPage;
