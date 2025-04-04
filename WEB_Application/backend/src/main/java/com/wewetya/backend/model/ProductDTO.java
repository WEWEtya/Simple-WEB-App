package com.wewetya.backend.model;

import java.util.List;

public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private List<ProductImage> images;       
    private List<ProductAttributeDTO> attributes;  

    // Constructor with all necessary fields
    public ProductDTO(Long id, String name, String description, List<ProductImage> images, List<ProductAttributeDTO> attributes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.images = images;
        this.attributes = attributes;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<ProductImage> getImages() { return images; }
    public void setImages(List<ProductImage> images) { this.images = images; }

    public List<ProductAttributeDTO> getAttributes() { return attributes; }
    public void setAttributes(List<ProductAttributeDTO> attributes) { this.attributes = attributes; }
}
