package com.ap.Entity;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="donations")
@Data
public class Donation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO ,generator ="donor_seq_gen")
    @SequenceGenerator(name = "donor_seq_gen", sequenceName = "donor_seq", initialValue = 1, allocationSize = 1)
	@Column
	    private Long id;
	@Column
	@Positive(message = "Amount must be positive")
	private Double amount;

	@Column
	@NotBlank(message = "Cause name is required")
	private String cause;

	@Column
	@NotBlank(message = "Payment method is required")
	private String paymentMethod;
	    //Relationship: One user can have multiple donations
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    
}
