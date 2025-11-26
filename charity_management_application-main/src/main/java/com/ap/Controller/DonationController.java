package com.ap.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ap.Dto.LeaderBoardDto;
import com.ap.Entity.Donation;
import com.ap.Repository.DonationRepository;
import com.ap.Service.DonationServiceI;

@RestController
@RequestMapping("/donation")
public class DonationController {
	
	@Autowired
	private DonationServiceI dservice;
	@Autowired
	private DonationRepository drepo;
	
	@CrossOrigin("http://localhost:5173")
	@PostMapping
	public Donation saveDonations(@Valid @RequestBody Donation donation)
	{
		return dservice.saveDonation(donation);
		
	}
	@CrossOrigin("http://localhost:5173")
	@GetMapping
	public List<Donation> getAllDonations()
	{
		return dservice.getAllDonations();
		
	}
	@CrossOrigin("http://localhost:5173")
	@GetMapping("/{id}")
	public Donation getDonationById(@PathVariable Long id)
	{
		return dservice.getDonationsByUserId(id);
		
	}
	@GetMapping("/{userId}/donations")
	@CrossOrigin("http://localhost:5173")
	public ResponseEntity<List<Donation>> getUserDonations(@PathVariable Long userId) {
	    List<Donation> donations = dservice.getDonationByUserId(userId);
	    return new ResponseEntity<>(donations, HttpStatus.OK);
	}

	@CrossOrigin("http://localhost:5173")
	@GetMapping("/leaderboard")
	public List<LeaderBoardDto> getLeaderboard() {
	    return drepo.getTopDonors();
	}

	
	

}
