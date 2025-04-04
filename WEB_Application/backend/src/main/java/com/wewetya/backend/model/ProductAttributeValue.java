package com.wewetya.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_attribute_values")
public class ProductAttributeValue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "attribute_id")
    private ProductAttribute attribute;

    private String value;

    public ProductAttribute getAttribute() { return attribute; }
    public void setAttribute(ProductAttribute attribute) { this.attribute = attribute; }

    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
}
