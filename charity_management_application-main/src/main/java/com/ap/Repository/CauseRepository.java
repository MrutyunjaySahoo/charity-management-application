package com.ap.Repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ap.Entity.Cause;

public interface CauseRepository extends JpaRepository<Cause,Long>{
	 List<Cause> findByStartDateAfter(LocalDate date);
}
