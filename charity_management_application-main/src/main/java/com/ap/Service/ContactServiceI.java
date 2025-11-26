package com.ap.Service;

import java.util.List;

import com.ap.Entity.ContactUS;

public interface ContactServiceI {
	
	public ContactUS insertMessage(ContactUS contact);
	public List<ContactUS> getAllQuery();

}
