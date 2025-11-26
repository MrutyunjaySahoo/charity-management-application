package com.ap.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="contact_us")
@Data
public class ContactUS {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "contact_seq_gen")
	@SequenceGenerator(name="contact_seq_gen", sequenceName = "contact_seq" ,initialValue = 1,allocationSize = 1)
	@Column
	private Integer id;
	@Column
	private String fullName;
	@Column
	private String email;
	@Column
	private String message;

}
