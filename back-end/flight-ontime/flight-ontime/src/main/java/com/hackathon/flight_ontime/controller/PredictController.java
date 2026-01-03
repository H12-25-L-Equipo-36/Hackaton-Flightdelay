package com.hackathon.flight_ontime.controller;

import com.hackathon.flight_ontime.DTO.DataRequest;
import com.hackathon.flight_ontime.DTO.DataResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PredictController {
    @PostMapping("/predict")
    public DataResponse predictionResult(@RequestBody DataRequest request){
        return new DataResponse(0.55, "delayed");
    }
}
