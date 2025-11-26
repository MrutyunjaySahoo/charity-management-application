package com.ap.Entity;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="cause")
public class Cause {
	


	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO, generator = "cause_seq_gen")
	    @SequenceGenerator(name="cuase_seq_gen" , sequenceName = "cause_seq" ,initialValue = 100 ,allocationSize = 1)
	    @Column
	    private Long id;
	    
	    @NotBlank(message = "Title is required")
	    private String title;

	    @NotBlank(message = "Description is required")
	    private String description;
	    
	    @Column
	    private String targetAmount;
	    @Column
	    private LocalDate startDate;
	    @Column
	    private LocalDate endDate;

	    // getters and setters
	


}
