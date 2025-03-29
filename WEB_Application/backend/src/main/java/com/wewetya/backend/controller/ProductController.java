package com.wewetya.backend.controller;

import com.wewetya.backend.model.Product;
import com.wewetya.backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getAll(){
        return productRepository.findAll();
    }
}
