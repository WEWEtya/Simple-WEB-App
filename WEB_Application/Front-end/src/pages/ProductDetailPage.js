import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import "../styles/ProductDetailPage/productDetail.css";

import ProductDescription from "../components/ProductsDetail/ProductDescription.js";
import ProductSelection from "../components/ProductsDetail/ProductSelection.js";
import ActionButtons from "../components/ProductsDetail/ActionButtons.js";
import ProductDetailsTab from "../components/ProductsDetail/ProductDetailsTab.js";
import ProductGallery from "../components/ProductsDetail/ProductGallery.js";


function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
                setError("Product not found");
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>No product data available.</div>;

    return (
        <div className="product_detail-container">
            <div className="product_detail-left">
                <ProductDescription product={product} />
                <ProductSelection />
                <ActionButtons />
                <ProductDetailsTab />
            </div>

            <div className="product_detail-right">
                <ProductGallery images={product.images} />
            </div>
        </div>
    );
}

export default ProductDetailPage;
