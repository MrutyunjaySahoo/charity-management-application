package com.ap.Service;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ap.Entity.User;
import com.ap.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserServiceI {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User RegisterUser(User user) {
		User saveUser = userRepo.save(user);
		
		return saveUser;
	}

	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		Optional<User> getbyId = userRepo.findById(id);
		return getbyId.orElse(null);
	}

	@Override
	public void deleteUser(Integer id) {
		
		userRepo.deleteById(id);
		
	}

	@Override
	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepo.findByEmail(email);
	}
	 @Override
	    public User updateUser(Integer id, User userDetails) {
	        User user = userRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
	        user.setUser_Name(userDetails.getUser_Name());
	        user.setEmail(userDetails.getEmail());
	        user.setPassword(userDetails.getPassword());
	        return userRepo.save(user);
	    }
	

}
