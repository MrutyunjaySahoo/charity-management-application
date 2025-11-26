package com.ap.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ap.Entity.User;

@Service
public interface UserServiceI {

	public User RegisterUser(User user);
	
	public List<User>getAllUser();
	
	public User getUserById(Integer id);
	
	public void deleteUser(Integer id);
	User getUserByEmail(String email);
	 User updateUser(Integer id, User userDetails);
	
}
