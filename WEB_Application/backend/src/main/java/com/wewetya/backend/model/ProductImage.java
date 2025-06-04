package com.wewetya.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "product_images")
public class ProductImage {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;
    public ProductImage() {}

    public ProductImage(String imageUrl, Product product){
        this.imageUrl = imageUrl;
        this.product = product;
    }

    @Column(name = "is_main")
    private boolean isMain;

    public Long getId() { return id; }
    public void setId(Long id) {  this.id = id; }

    public Product getProduct() { return product; }
    public void setProduct(Product product) {  this.product = product; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public boolean isMain() { return isMain; }
    public void setMain(boolean main) {  this.isMain = main; }
}
