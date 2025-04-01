package com.wewetya.backend.controller;

import com.wewetya.backend.model.Product;
import com.wewetya.backend.model.ProductImage;
import com.wewetya.backend.repository.ProductRepository;
import com.wewetya.backend.repository.ProductImageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000/")
public class ProductController {

    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;

    public ProductController(ProductRepository productRepository, ProductImageRepository productImageRepository) {
        this.productRepository = productRepository;
        this.productImageRepository = productImageRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return productRepository.findById(id)
            .map(product -> {
                List<ProductImage> images = productImageRepository.findByProductId(id);
                product.setImages(images);
                return ResponseEntity.ok(product);
            })
            .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @GetMapping
    public List<Product> getAll(@RequestParam(required = false) String type){
        List<Product> products;

        if (type != null && !type.isEmpty()) {
            products = productRepository.findByType(type);
        } else {
            products = productRepository.findAll();
        }

        for (Product product : products) {
            List<ProductImage> images = productImageRepository.findByProductId(product.getId());
            product.setImages(images);
        }
        return products;
    }

}