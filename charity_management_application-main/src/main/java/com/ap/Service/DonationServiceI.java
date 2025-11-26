package com.ap.Service;

import java.util.List;
import java.util.Optional;

import com.ap.Entity.Donation;

public interface DonationServiceI {
	
	Donation saveDonation(Donation donation);
	
    List<Donation> getAllDonations();
    
    Donation getDonationsByUserId(Long userId);
    
    List<Donation> getDonationByUserId(Long userId);

}
