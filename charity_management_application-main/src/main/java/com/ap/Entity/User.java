package com.ap.Entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="User_of_charity_app")
@Data
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO ,generator ="user_seq_gen")
    @SequenceGenerator(name = "user_seq_gen", sequenceName = "user_seq", initialValue = 1, allocationSize = 1)
	@Column
	private Integer id;
	
	@NotBlank(message = "Full Name is required")
    private String user_Name;

    @Email(message = "Invalid Email Address")
    @NotBlank(message = "Email is required")
    private String email;

    @Size(min = 4, message = "Password must be at least 4 characters")
    @NotBlank(message = "Password is required")
    private String password;
    
    @NotBlank(message = "Role cannot be empty")
    @Pattern(regexp = "USER|ADMIN", message = "Role must be either USER or ADMIN")
    private String role; // USER / ADMIN

}
