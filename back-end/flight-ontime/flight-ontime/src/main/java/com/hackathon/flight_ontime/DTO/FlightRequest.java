package com.hackathon.flight_ontime.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public class FlightRequest {

    // Nombre de la aerolínea. Requerido y con longitud máxima para evitar payloads muy largos.
    // @NotBlank: campo no puede ser null ni cadena vacía (después de trim).
    // @Size(max=100): limita el número de caracteres a 100.
    @NotBlank(message = "airline is required")
    @Size(max = 100, message = "airline max length is 100")
    private String airline;

    // Código IATA de origen (p. ej. MAD, LAX).
    // @NotBlank: valor obligatorio.
    // @Size: límite general por si se usa un nombre en vez de código (ajustable).
    // @Pattern: valida que sea exactamente 3 letras mayúsculas (formato IATA).
    @NotBlank(message = "origin is required")
    @Size(max = 100, message = "origin max length is 100")
    @Pattern(regexp = "^[A-Z]{3}$", message = "origin must be IATA code (3 uppercase letters)")
    private String origin;

    // Código IATA de destino (p. ej. BCN, JFK).
    // Misma lógica que `origin`: obligatorio y formato IATA (3 letras mayúsculas).
    @NotBlank(message = "destination is required")
    @Size(max = 100, message = "destination max length is 100")
    @Pattern(regexp = "^[A-Z]{3}$", message = "destination must be IATA code (3 uppercase letters)")
    private String destination;

    // Fecha de salida del vuelo.
    // @NotNull: la fecha es obligatoria.
    // @JsonProperty("departure_date"): mapea la propiedad JSON "departure_date" al campo Java.
    // @JsonFormat: define el formato esperado en JSON (yyyy-MM-dd) para parseo correcto a LocalDate.
    @NotNull(message = "departure_date is required")
    @JsonProperty("departure_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate departureDate;

    // Distancia del vuelo en kilómetros.
    // @NotNull: obligatorio.
    // @PositiveOrZero: asegura que la distancia no sea negativa (>= 0).
    // @JsonProperty("distance_km"): mapea la propiedad JSON "distance_km".
    @NotNull(message = "distance_km is required")
    @PositiveOrZero(message = "distance_km must be >= 0")
    @JsonProperty("distance_km")
    private Integer distanceKm;

    public FlightRequest() {
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public Integer getDistanceKm() {
        return distanceKm;
    }

    public void setDistanceKm(Integer distanceKm) {
        this.distanceKm = distanceKm;
    }
}
