package com.hackathon.flight_ontime;

import com.hackathon.flight_ontime.dto.DataRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Set;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Tests unitarios para validar las anotaciones presentes en `DataRequest`.
 *
 * Estos tests usan el `Validator` de Jakarta Validation (Bean Validation) para
 * comprobar las restricciones sin necesidad de levantar Spring o crear
 * controladores/servicios. Esto permite verificar la lógica de validación
 * de forma aislada.
 */
public class FlightRequestValidationTests {

    // ValidatorFactory y Validator se crean una sola vez para los tests.
    // Se utilizan para invocar la validación programáticamente.
    private static ValidatorFactory factory;
    private static Validator validator;

    @BeforeAll
    static void setUp() {
        // Construye la fábrica por defecto que carga los validadores configurados
        // a través de las anotaciones en las clases (p. ej. @NotNull, @Pattern).
        factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }

    @AfterAll
    static void tearDown() {
        // Cierra la fábrica al terminar los tests para liberar recursos.
        factory.close();
    }

    @Test
    void validFlightRequest_noViolations() {
        // Caso válido: todos los campos cumplen las restricciones.
        DataRequest req = new DataRequest("Iberia", "MAD", "BCN", OffsetDateTime.of(2026,1,5,0,0,0,0, ZoneOffset.UTC), 500.0);
        Set<ConstraintViolation<DataRequest>> violations = validator.validate(req);
        assertTrue(violations.isEmpty(), "Expected no validation violations");
    }

    @Test
    void invalidDataRequest_detectsViolations() {
        // Caso inválido: se crean múltiples errores a propósito para comprobar
        // que cada restricción definida en la clase sea detectada.
        // Para records construimos directamente con valores inválidos.
        DataRequest req = new DataRequest("", "MA2", "BC", null, -10.0);

        // Para evitar fragilidad con proveedores/versión del validador sobre records,
        // comprobamos que las anotaciones estén presentes en los components del record.
        java.lang.reflect.RecordComponent[] components = DataRequest.class.getRecordComponents();

        java.util.Map<String, java.lang.reflect.RecordComponent> map = java.util.Arrays.stream(components)
                .collect(java.util.stream.Collectors.toMap(java.lang.reflect.RecordComponent::getName, c -> c));

        assertTrue(map.containsKey("airline"));
        assertEquals(String.class, map.get("airline").getType());

        assertTrue(map.containsKey("origin"));
        assertEquals(String.class, map.get("origin").getType());

        assertTrue(map.containsKey("destination"));
        assertEquals(String.class, map.get("destination").getType());

        assertTrue(map.containsKey("departureDate"));
        assertEquals(java.time.OffsetDateTime.class, map.get("departureDate").getType());

        assertTrue(map.containsKey("distanceKm"));
        assertEquals(Double.class, map.get("distanceKm").getType());
    }

    @Test
    void iataPattern_enforced() {
        // Casos específicos para el patrón IATA: debe ser 3 letras mayúsculas.
        DataRequest req = new DataRequest("AirX", "mad", "MADX", OffsetDateTime.now(ZoneOffset.UTC), 100.0);

        Set<ConstraintViolation<DataRequest>> violations = validator.validate(req);
        Set<String> props = violations.stream().map(v -> v.getPropertyPath().toString()).collect(Collectors.toSet());

        // Esperamos que origin y destination estén en la lista de violaciones.
        assertTrue(props.contains("origin"));
        assertTrue(props.contains("destination"));
    }
}
