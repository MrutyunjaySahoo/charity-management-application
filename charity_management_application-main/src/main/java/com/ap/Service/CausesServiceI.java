package com.ap.Service;

import java.util.List;

import com.ap.Entity.Cause;

public interface CausesServiceI {
	
	 Cause createCause(Cause cause);
	 
	  List<Cause> getAllCauses();
	    
	   Cause getCauseById(Long id);
	    
	   void deleteCause(Long id);
	   
	   List<Cause> getUpcomingCauses();


}
