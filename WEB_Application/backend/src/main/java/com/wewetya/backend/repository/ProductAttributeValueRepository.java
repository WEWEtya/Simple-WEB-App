package com.wewetya.backend.repository;

import com.wewetya.backend.model.ProductAttributeValue;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductAttributeValueRepository extends JpaRepository<ProductAttributeValue, Long> {
    List<ProductAttributeValue> findByProductId(Long productId);
}
