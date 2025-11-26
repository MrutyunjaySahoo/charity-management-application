package com.ap.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ap.Entity.Donation;
import com.ap.Entity.User;
import com.ap.Repository.DonationRepository;
import com.ap.Repository.UserRepository;

@Service
public class DonationServiceImpl implements DonationServiceI {
	
	@Autowired
	private DonationRepository donationRepo;
	@Autowired
	private UserRepository userRepository;
	@Override
	public Donation saveDonation(Donation donation) {
//	    Long userId = donation.getUser().getId(); // Extract user id
		
		Integer userId = donation.getUser().getId();
	     User user = userRepository.findById(userId)
	                  .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
	    donation.setUser(user); // Set full user object
	    return donationRepo.save(donation);
	}


	@Override
	public List<Donation> getAllDonations() {
		
		return donationRepo.findAll();
	}

	@Override
	public Donation getDonationsByUserId(Long userId) {
		
		Optional<Donation> getDonationbyId = donationRepo.findById(userId);
		return getDonationbyId.orElse(null);
	}


	@Override
	public List<Donation> getDonationByUserId(Long userId) {
		
		return donationRepo.findByUserId(userId);
	}

}
