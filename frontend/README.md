# ✈️ Flight Prediction Simulator - Frontend

Este es el repositorio del frontend para el Simulador de Predicción de Vuelos. La aplicación permite simular la predicción de estados de vuelos (a tiempo, retrasado, cancelado) basándose en diversos parámetros de entrada.

---

## � Tecnologías Utilizadas

- **Core:** React 19 + Vite
- **Estado y Mutaciones:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Formularios:** [React Hook Form](https://react-hook-form.com/)
- **Validación:** [Zod](https://zod.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Lógica Funcional:** [TS-Pattern](https://github.com/gvergnaud/ts-pattern) para pattern matching.

---

## 🛠️ Configuración de Desarrollo (Mock Server)

Para facilitar el desarrollo del frontend sin depender de un backend funcional de Data Science, hemos implementado un **Mock Server** utilizando `json-server`.

### Servidor de Emulación (JSON Server)

El servidor emula el comportamiento de la API de predicción y está configurado en `server.js`.

- **Puerto:** 3001
- **Endpoints Disponibles (POST):**
  - `/predict`: Devuelve un resultado aleatorio (On Time, Delayed, Cancelled).
  - `/predict/success`: Devuelve siempre un resultado exitoso (On Time).
  - `/predict/fail`: Devuelve siempre un resultado de fallo (Delayed).

### Cómo ejecutar

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```
2. **Arrancar el servidor de mocks (Terminal 1):**
   ```bash
   npm run server
   ```
3. **Arrancar la aplicación frontend (Terminal 2):**
   ```bash
   npm run dev
   ```

---

## 🌐 Variables de Entorno

La aplicación utiliza un sistema de validación de variables de entorno con Zod en `src/shared/utils.ts`. Asegúrate de tener un archivo `.env` con lo siguiente:

```env
VITE_FLIGHT_PREDICTION_API="http://localhost:3001"
VITE_FLIGHT_PREDICTION_API_MOCKUP="http://localhost:3001"
```

El hook `useFlightPrediction` cambiará automáticamente entre el API real y el Mockup dependiendo del `NODE_ENV` (MODE en Vite).

---

## 📄 Contrato de Predicción

La comunicación con el servicio de predicción sigue este esquema:

### Request (PredictionRequest)

```typescript
{
  airline: string;
  origin: string;
  destination: string;
  departureDate: string; // ISO String
  distanceKm: number;
}
```

### Response (PredictionResult)

```typescript
{
  prediction: string; // "On Time" | "Delayed" | "Cancelled"
  probability: number; // 0.0 - 1.0
}
```

---
