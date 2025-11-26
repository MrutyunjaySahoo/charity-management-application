package com.ap.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ap.Entity.ContactUS;
import com.ap.Service.ContactServiceI;

@RestController
@RequestMapping("/api/contact")
public class ContactController {
	@Autowired
	private ContactServiceI contactservice;
	
	 @CrossOrigin("http://localhost:5173")
	@PostMapping
	public ResponseEntity<ContactUS> saveContact(@RequestBody ContactUS contactus)
	{
		ContactUS insertMessage = contactservice.insertMessage(contactus);
		
		return new ResponseEntity<>(insertMessage,HttpStatus.OK);
		
	}
	 @GetMapping
	 public ResponseEntity<List<ContactUS>> getAllQuery() 
	 {
		List<ContactUS> allQuery = contactservice.getAllQuery();
		return new  ResponseEntity<>(allQuery,HttpStatus.OK);
		 
	 }
	
	

}
