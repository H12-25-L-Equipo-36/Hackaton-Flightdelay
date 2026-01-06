package com.hackathon.flight_ontime.health.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("healthControllerHealth")
public class HealthController {
    @GetMapping("/health")
    public String systemStatus(){
        return "OK";
    }
}
