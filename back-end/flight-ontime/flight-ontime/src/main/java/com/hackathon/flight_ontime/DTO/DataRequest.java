package com.hackathon.flight_ontime.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;
import java.time.OffsetDateTime;

public record DataRequest(
        @NotNull(message = "airline is required")
        @Size(max = 100, message = "airline max length is 100")
        @JsonProperty("airline")
        String airline,

        @NotNull(message = "origin is required")
        @Pattern(regexp = "^[A-Z]{3}$", message = "origin must be IATA code (3 uppercase letters)")
        @JsonProperty("origin")
        String origin,

        @NotNull(message = "destination is required")
        @Pattern(regexp = "^[A-Z]{3}$", message = "destination must be IATA code (3 uppercase letters)")
        @JsonProperty("destination")
        String destination,

        @NotNull(message = "departureDate is required")
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssXXX")
        @JsonProperty("departureDate")
        OffsetDateTime departureDate,

        @NotNull(message = "distanceKm is required")
        @PositiveOrZero(message = "distanceKm must be zero or positive")
        @JsonProperty("distanceKm")
        Double distanceKm
) {
}
package com.hackathon.flight_ontime.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotNull;
import java.time.OffsetDateTime;

/*
 
public record DataRequest(
        @NotNull String airline,
        @NotNull String origin,
        @NotNull String destination,
        OffsetDateTime departureDate,
        Double distanceKm
) {
}
*/


public record DataRequest(
        @NotNull(message = "airline is required")
        @Size(max = 100, message = "airline max length is 100")
        @JsonProperty("airline")
        String airline,

        @NotNull(message = "origin is required")
        @Pattern(regexp = "^[A-Z]{3}$", message = "origin must be IATA code (3 uppercase letters)")
        @JsonProperty("origin")
        String origin,

        @NotNull(message = "destination is required")
        @Pattern(regexp = "^[A-Z]{3}$", message = "destination must be IATA code (3 uppercase letters)")
        @JsonProperty("destination")
        String destination,

        @NotNull(message = "departureDate is required")
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssXXX")
        @JsonProperty("departureDate")
        OffsetDateTime departureDate,

        @NotNull(message = "distanceKm is required")
        @PositiveOrZero(message = "distanceKm must be zero or positive")
        @JsonProperty("distanceKm")
        Double distanceKm
) {
}