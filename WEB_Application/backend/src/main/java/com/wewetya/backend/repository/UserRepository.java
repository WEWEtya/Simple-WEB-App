package com.wewetya.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wewetya.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
