package com.internteam.taskmanagerapi.controller;

import com.internteam.taskmanagerapi.model.User;
import com.internteam.taskmanagerapi.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Allow CORS for testing; restrict in production
public class AuthController {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final SecretKey secretKey;

    @Autowired
    public AuthController(UserService userService, PasswordEncoder passwordEncoder, @Value("${jwt.secret}") String jwtSecret) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.secretKey = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    // Register a new user with validation
    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody User user) {
        try {
            if (user.getUsername() == null || user.getPassword() == null) {
                return ResponseEntity.badRequest().body("Username and password are required");
            }
            if (user.getRoles() == null) {
                user.setRoles(java.util.Collections.emptyList());
            }
            if (user.getRoles().isEmpty()) {
                return ResponseEntity.badRequest().body("At least one role is required");
            }
            if (userService.findByUsername(user.getUsername()).isPresent()) {
                return ResponseEntity.badRequest().body("Username already exists");
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    // Login and generate JWT
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();

        try {
            if (user.getUsername() == null || user.getPassword() == null) {
                response.put("error", "Username and password are required");
                return ResponseEntity.badRequest().body(response);
            }

            User foundUser = userService.findByUsername(user.getUsername())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            if (!passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
                throw new RuntimeException("Invalid credentials");
            }

            String token = Jwts.builder()
                    .setSubject(user.getUsername())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                    .signWith(secretKey, io.jsonwebtoken.SignatureAlgorithm.HS512)
                    .compact();

            response.put("token", token);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(401).body(response); // Unauthorized
        }
    }
}