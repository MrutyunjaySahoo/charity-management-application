package com.ap.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ap.Dto.LeaderBoardDto;
import com.ap.Entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long>
{
	public List<Donation> findByUserId(Long userId);
	
	@Query("SELECT d.user.id AS userId, d.user.user_Name AS userName, SUM(d.amount) AS totalAmount FROM Donation d GROUP BY d.user.id, d.user.user_Name ORDER BY totalAmount DESC")
	List<LeaderBoardDto> getTopDonors();
}
