package com.ap.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ap.Entity.Cause;
import com.ap.Service.CausesServiceI;

@RestController
@RequestMapping("/api/causes")
public class CauseController {

    @Autowired
    private CausesServiceI causeService;

    @PostMapping
    public ResponseEntity<Cause> createCause(@Valid @RequestBody Cause cause) {
        return ResponseEntity.ok(causeService.createCause(cause));
    }

    @GetMapping
    public ResponseEntity<List<Cause>> getAllCauses() {
        return ResponseEntity.ok(causeService.getAllCauses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cause> getCauseById(@PathVariable Long id) {
        return ResponseEntity.ok(causeService.getCauseById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCause(@PathVariable Long id) {
        causeService.deleteCause(id);
        return ResponseEntity.ok("Cause deleted successfully!");
    }
 // CauseController.java
    @CrossOrigin("http://localhost:5173")
    @GetMapping("/upcoming")
    public ResponseEntity<List<Cause>> getUpcomingCauses() {
        return ResponseEntity.ok(causeService.getUpcomingCauses());
    }

}