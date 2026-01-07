package com.hackathon.flight_ontime.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    @GetMapping("/Health")
    public String systemStatus(){
        return "OK";
    }
}
