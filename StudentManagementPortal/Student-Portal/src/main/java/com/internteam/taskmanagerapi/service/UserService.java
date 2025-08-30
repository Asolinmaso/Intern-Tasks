package com.internteam.taskmanagerapi.service;

import com.internteam.taskmanagerapi.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    User saveUser(User user);
    Optional<User> findById(String id);
    void deleteById(String id);
    List<User> findByRolesContaining(String role);
    List<User> findAll();
    Optional<User> findByUsername(String username);
}