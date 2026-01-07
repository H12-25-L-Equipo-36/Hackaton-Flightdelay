package com.hackathon.flight_ontime.predict.DTO;

public record DataResponse(
        Double probability,
        String forecast
) {
}
