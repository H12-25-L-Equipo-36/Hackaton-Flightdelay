package com.hackathon.flight_ontime.predict.controller;

import com.hackathon.flight_ontime.predict.DTO.DataRequest;
import com.hackathon.flight_ontime.predict.DTO.DataResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("predictControllerPredict")
public class PredictController {
    @PostMapping("/predict-internal")
    public DataResponse predictionResult(@RequestBody DataRequest request){
        return new DataResponse(0.55, "delayed");
    }
}
