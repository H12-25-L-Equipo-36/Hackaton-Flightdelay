package com.hackathon.flight_ontime.controller;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.flight_ontime.dto.DataRequest;
import com.hackathon.flight_ontime.dto.DataResponse;

@RestController
public class PredictController {
    @PostMapping("/predict")
    public DataResponse predictionResult(@Valid @RequestBody DataRequest request){
        return new DataResponse(0.55, "delayed");
    }
}
