package com.hackathon.flight_ontime.DTO;

public record DataResponse(
        Double probability,
        String forecast
) {
}
