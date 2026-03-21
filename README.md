![banner](/Data-science/Assets/banner.jpg)

# ✈️ FlightOnTime - Flight Delay Predictor

FlightOnTime is a full-stack application developed during a hackathon to predict flight delays using Machine Learning. The system integrates a Java Spring Boot backend with a Python-based AI microservice, following a microservices architecture.

The project demonstrates real-world backend development, service integration, and collaborative work in a fast-paced environment.

## 🌐 Live Demo

👉 [https://flightdelay-app.vercel.app](https://frontend-three-tawny-47.vercel.app/)

Interact with the application and get real-time flight delay predictions using the deployed system.

## 🧪 How to Use

1. Open the live demo  
2. Enter flight information  
3. Submit the request  
4. Receive a delay prediction from the ML model

The system processes the request through the backend and communicates with the AI microservice to generate predictions.

## 🚀 Project Architecture

The project is divided into four main modules:

### 1. 📂 Data Science (`/Data-science`)

- **Objective**: Exploratory Data Analysis (EDA) and model training.
- **Models**: Logistic Regression, Random Forest, XGBoost, and CatBoost.
- **Stack**: Python, Scikit-Learn, Pandas, Jupyter Notebooks.

### 2. ⚡ AI Microservice (`/microservice`)

- **Objective**: Serve predictions from the trained model.
- **Tech Stack**: FastAPI (Python), UV (package manager), Docker.
- **Endpoints**: Unit and batch predictions via REST API.

### 3. ☕ Backend (`/backend`)

- **Objective**: Data orchestration, user management, and prediction history.
- **Tech Stack**: Java 21, Spring Boot 4, Flyway, PostgreSQL (Docker).
- **Documentation**: Swagger/OpenAPI integration.

### 4. 🎨 Frontend (`/frontend`)

- **Objective**: Intuitive user interface for queries and metrics visualization.
- **Tech Stack**: Next.js 16 (App Router), React 19, Tailwind CSS 4, TanStack Query.
- **Features**: Prediction dashboard, interactive history, and AI assistant chat.

## 🛠️ Quick Installation

1.  **Requirements**: Docker, Java 21, Python 3.11+, Node.js 20+.
2.  **Configuration**:
    ```bash
    # Clone the repo and install frontend dependencies
    cd frontend && npm install
    # Start database and backend
    cd ../backend && ./mvnw spring-boot:run
    # Start AI microservice
    cd ../microservice && pip install -r requirements.txt && python main.py
    ```

## 📈 Impact

Optimizing passenger experience and airport operational management through accurate predictions based on airline, origin, destination, and distance.

---

_Developed for the 2026 Flight Delay Hackathon._
