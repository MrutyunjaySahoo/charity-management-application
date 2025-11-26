package com.ap.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ap.Entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{

	User findByEmail(String email);

}
