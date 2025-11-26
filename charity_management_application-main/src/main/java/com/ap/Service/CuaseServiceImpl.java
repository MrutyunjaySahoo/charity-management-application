package com.ap.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ap.Entity.Cause;
import com.ap.Repository.CauseRepository;

@Service
public class CuaseServiceImpl implements CausesServiceI {

	 @Autowired
	    private CauseRepository causeRepository;

	    @Override
	    public Cause createCause(Cause cause) {
	        return causeRepository.save(cause);
	    }

	    @Override
	    public List<Cause> getAllCauses() {
	        return causeRepository.findAll();
	    }

	    @Override
	    public Cause getCauseById(Long id) {
	        return causeRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Cause not found with id: " + id));
	    }

	    @Override
	    public void deleteCause(Long id) {
	        causeRepository.deleteById(id);
	    }

		@Override
		public List<Cause> getUpcomingCauses() {
			// TODO Auto-generated method stub
			 return causeRepository.findByStartDateAfter(LocalDate.now());
		}

}
