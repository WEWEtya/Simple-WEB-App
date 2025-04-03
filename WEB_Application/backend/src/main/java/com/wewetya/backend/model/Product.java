package com.wewetya.backend.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private BigDecimal price;
    private String description;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<ProductImage> images;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }

    public List<ProductImage> getImages() { return images; }
    public void setImages(List<ProductImage> images) { this.images = images; }
}
