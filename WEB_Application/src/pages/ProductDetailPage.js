// src/pages/ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom"; 

import "../styles/ProductDetailPage/productDetail.css";

import ProductDescription from "../components/ProductsDetail/ProductDescription.js";
import ProductSelection from "../components/ProductsDetail/ProductSelection.js";
import ActionButtons from "../components/ProductsDetail/ActionButtons.js";
import ProductDetailsTab from "../components/ProductsDetail/ProductDetailsTab.js";
import ProductGallery from "../components/ProductsDetail/ProductGallery.js";

import image1 from "../assets/images/AboutUs/hehehe.jpg"; 
import image2 from "../assets/images/AboutUs/hehehe2.jpg"; 
import image3 from "../assets/images/AboutUs/hehehe3.jpg"; 

import image4 from "../assets/images/HomePage/Products/Placeholder.png"; 

import image5 from "../assets/images/HomePage/HeroBanner/airpods.png"; 
import image6 from "../assets/images/HomePage/HeroBanner/airpods_2.png"; 
import image7 from "../assets/images/HomePage/HeroBanner/iphone.png"; 

const productData = [
    { 
        id: 1, 
        name: 'Product 1', 
        images: [image5, image6], 
        price: '$100', 
        description: 'This is Product 1', 
        reviews: 10, 
        initialRating: 3 },
    { 
        id: 2, 
        name: 'Product 2', 
        images: [image7, image4, image4], 
        price: '$200', 
        description: 'This is Product 2', 
        reviews: 8, 
        initialRating: 4 },
    { 
        id: 3, 
        name: 'Product 3', 
        images: [image1, image2, image3], 
        price: '$300', 
        description: 'This is Product 3', 
        reviews: 5, 
        initialRating: 2 }, // Add other products
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
                <ProductGallery images={product.images}/>
            </div>
        </div>
    );
};

export default ProductDetailPage;
