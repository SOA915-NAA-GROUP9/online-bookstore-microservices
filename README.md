# Online Bookstore Microservices

This repository contains the implementation of an online bookstore built using a microservices architecture. The project is part of the Service-Oriented Architecture (SOA) course, developed by Helly Rajeshbhai Patel, Jiyad Mohammed Arif Shaikh, Nicholas Nwanua Ilechie, and Nirajbhai Ranchhodbhai Limbasiya.

## Project Overview
The online bookstore allows users to:
- Register and manage profiles (User Service).
- Browse and manage a book catalog (Product Service).
- Place and track orders (Order Service).
- Receive notifications for order confirmations (Notification Service).

The services are containerized using Docker, orchestrated with Kubernetes, and tested with a CI/CD pipeline.

## Prerequisites
- **Docker**: Install Docker Desktop (https://www.docker.com/products/docker-desktop).
- **Kubernetes**: Use Minikube (https://minikube.sigs.k8s.io/docs/start/) or Kind (https://kind.sigs.k8s.io/docs/user/quick-start/) for local clusters.
- **Git**: Install Git (https://git-scm.com/downloads).
- **Node.js/Python**: Depending on the service implementation (to be specified).
- **Postman**: For API testing (https://www.postman.com/downloads/).

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices.git
   cd online-bookstore-microservices

2. **Run Locally with Docker Compose**:
   ```bash
    docker-compose up --build

3. **Set Up Kubernetes Cluster**:
    a. Start Minikube:
    ```bash
    minikube start

    b. Apply Kubernetes manifests:
    ```bash
    kubectl apply -f kubernetes/

4. **Access Services**:
- User Service: http://localhost:3000/users
- Product Service: http://localhost:3001/books
- Order Service: http://localhost:3002/orders
- Notification Service: http://localhost:3003/notifications (Ports may vary based on configuration.)

## Project Structure
- **user-service/**: Handles user registration, authentication, and profiles.
- **product-service/**: Manages book catalog.
- **order-service/**: Processes orders.
- **notification-service/**: Sends notifications.
- **kubernetes/**: Kubernetes YAML files for deployments.
- **docs/**: Architecture and API documentation.
- **tests/**: Unit, integration, and end-to-end tests.

## API Contracts
Detailed API contracts are in docs/api-contracts.md.

## Architecture
See docs/architecture.md for the architecture diagram and service interactions.

## Team
- Helly Rajeshbhai Patel
- Jiyad Mohammed Arif Shaikh
- Nicholas Nwanua Ilechie
- Nirajbhai Ranchhodbhai Limbasiya

## Development Workflow
- Use branches (e.g., user-service, product-service) for feature development.
- Submit pull requests for code reviews
- Run tests locally before pushing changes.

## Next Steps
- Implement User and Product Services (Week 6-7).
- Dockerize services and test with Docker Compose.
- Deploy to Kubernetes (Week 9-10).
- Set up CI/CD and monitoring (Week 11).
- Prepare final presentation (Week 12).