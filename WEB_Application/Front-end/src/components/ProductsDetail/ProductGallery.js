import React, { useState } from "react";
import "../../styles/ProductDetailPage/productDetail.css";

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images && images.length > 0 ? images[0].imageUrl : "");  

    if (!images || images.length === 0) {
        return <div>No images available.</div>; 
    }

    return (
        <div className="gallery_container">
            <div className="big_image">
                <img src={selectedImage} alt="Selected Product" />
            </div>

            <div className="thumbnail_row">
                {images.map((img, index) => (
                    <img 
                        key={img.id}
                        src={img.imageUrl}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedImage === img.imageUrl ? "active" : ""}`}
                        onMouseEnter={() => setSelectedImage(img.imageUrl)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;