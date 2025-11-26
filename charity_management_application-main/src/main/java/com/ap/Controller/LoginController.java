package com.ap.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ap.Entity.Login;
import com.ap.Entity.User;
import com.ap.Service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    private UserServiceImpl userService;

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody Login login) {
        User user = userService.getUserByEmail(login.getEmail());

        if (user != null) {
            if (user.getPassword().equals(login.getPassword())) {
                logger.info("Login successful for user: {}", login.getEmail());
                return ResponseEntity.ok(new LoginResponse("Login Successful!", user));
            } else {
                logger.warn("Invalid password attempt for user: {}", login.getEmail());
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new LoginResponse("Invalid email or password!", null));
            }
        } else {
            logger.warn("User not found with email: {}", login.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new LoginResponse("User not found!", null));
        }
    }

    // Modified response class with user details
    static class LoginResponse {
        private String message;
        private User user;

        public LoginResponse(String message, User user) {
            this.message = message;
            this.user = user;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }
    }
}
