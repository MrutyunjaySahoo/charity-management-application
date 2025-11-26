package com.ap.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ap.Entity.ContactUS;
import com.ap.Repository.ContactRepo;
@Service
public class ConatctService implements ContactServiceI {
	
	@Autowired
	private ContactRepo contactrepo;

	@Override
	public ContactUS insertMessage(ContactUS contact) {
		
		 return contactrepo.save(contact);
	}

	@Override
	public List<ContactUS> getAllQuery() {
		// TODO Auto-generated method stub
		return contactrepo.findAll();
	
	}

}
