package com.ap.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ap.Entity.ContactUS;

public interface ContactRepo extends JpaRepository<ContactUS,Integer>{

}
