package com.wewetya.backend.controller;

// Models Imports
import com.wewetya.backend.model.Product;
import com.wewetya.backend.model.ProductAttribute;
import com.wewetya.backend.model.ProductAttributeValue;
import com.wewetya.backend.model.ProductImage;
import com.wewetya.backend.model.ProductAttributeDTO;
import com.wewetya.backend.model.ProductDTO;

// Repository Imports
import com.wewetya.backend.repository.ProductRepository;
import com.wewetya.backend.repository.ProductAttributeValueRepository;
import com.wewetya.backend.repository.ProductImageRepository;

// Librarys Imports
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000/")
public class ProductController {

    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final ProductAttributeValueRepository productAttributeValueRepository;

    public ProductController(ProductRepository productRepository, ProductImageRepository productImageRepository, 
                             ProductAttributeValueRepository productAttributeValueRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
        this.productAttributeValueRepository = productAttributeValueRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable Long id) {
        return productRepository.findById(id)
            .map(product -> {
                // Fetch product images
                List<ProductImage> images = productImageRepository.findByProductId(id);
                product.setImages(images);

                // Fetch product attribute values from the correct table
                List<ProductAttributeValue> attributeValues = productAttributeValueRepository.findByProductId(id); // <-- Check this repository
                System.out.println("Fetched attribute values: " + attributeValues);  // Debug log

                if (attributeValues.isEmpty()) {
                    System.out.println("No attribute values found for product with ID: " + id);  // Debug log
                }

                // Map attribute values to ProductAttributeDTO
                List<ProductAttributeDTO> attributesWithValues = attributeValues.stream()
                    .map(attrValue -> new ProductAttributeDTO(
                        attrValue.getAttribute().getName(), // Ensure attribute is not null
                        attrValue.getValue()
                    ))
                    .collect(Collectors.toList());

                // Return the product along with attributes (no need to modify Product entity)
                ProductDTO productDTO = new ProductDTO(
                    product.getId(), 
                    product.getName(), 
                    product.getDescription(), 
                    images, 
                    attributesWithValues,
                    product.getPrice()
                );
                return ResponseEntity.ok(productDTO);
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    
    @GetMapping
    public List<Product> getAll(@RequestParam(required = false) String type,
                                @RequestParam(required = false) String search) {
        List<Product> products;

        // Apply category (type) filter if provided
        if (type != null && !type.isEmpty()) {
            products = productRepository.findByType(type);  // Find by category
        } else {
            products = productRepository.findAll();  // Get all products if no category is specified
        }

        // Apply search filter if provided
        if (search != null && !search.isEmpty()) {
            products = products.stream()
                    .filter(product -> product.getName().toLowerCase().contains(search.toLowerCase()) ||
                            product.getDescription().toLowerCase().contains(search.toLowerCase()))
                    .collect(Collectors.toList());
        }

        // Add images to the products
        for (Product product : products) {
            List<ProductImage> images = productImageRepository.findByProductId(product.getId());
            product.setImages(images);
        }

        return products;
    }
}