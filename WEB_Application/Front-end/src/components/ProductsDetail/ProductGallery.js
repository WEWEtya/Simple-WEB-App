import React, { useState } from "react";
import "../../styles/ProductDetailPage/productDetail.css";

// ProductGallery component displays a main product image and a row of thumbnails
const ProductGallery = ({ images }) => {
    // State to keep track of the currently selected image (shown as the big image)
    const [selectedImage, setSelectedImage] = useState(
        images && images.length > 0 ? images[0].imageUrl : ""
    );

    // If there are no images, show a fallback message
    if (!images || images.length === 0) {
        return <div>No images available.</div>; 
    }

    return (
        <div className="gallery_container">
            {/* Main large image display */}
            <div className="big_image">
                <img src={selectedImage} alt="Selected Product" />
            </div>

            {/* Thumbnails row */}
            <div className="thumbnail_row">
                {images.map((img, index) => (
                    <img 
                        key={img.id} // Unique key for each thumbnail
                        src={img.imageUrl} // Thumbnail image source
                        alt={`Thumbnail ${index + 1}`} // Accessible alt text
                        className={`thumbnail ${selectedImage === img.imageUrl ? "active" : ""}`} // Highlight if selected
                        // Change the main image when hovering over a thumbnail
                        onMouseEnter={() => setSelectedImage(img.imageUrl)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;