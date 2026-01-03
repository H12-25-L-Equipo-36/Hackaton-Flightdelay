package com.hackathon.flight_ontime.DTO;

import jakarta.validation.constraints.NotNull;

import java.time.OffsetDateTime;

public record DataRequest(
        @NotNull String airline,
        @NotNull String origin,
        @NotNull String destination,
        OffsetDateTime departureDate,
        Double distanceKm
) {
}
