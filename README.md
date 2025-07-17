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

2. **Install Dependencies**:
   ```bash
   cd user-service/src && npm install
   cd ../../product-service/src && npm install
   cd ../../tests && npm install

3. **Run Locally with Docker Compose**:
   ```bash
    docker-compose up --build

4. **Test APIs**:
    User Service: http://localhost:3000/users
    Product Service: http://localhost:3001/books
    Use Postman or curl (see docs/api-contracts.md for examples).

5. **Run Integration Tests**:
    ```bash
    cd tests
    npm test

6. **Set Up Kubernetes Cluster**:
    a. Start Minikube:
    ```bash
    minikube start

    b. Apply Kubernetes manifests:
    ```bash
    kubectl apply -f kubernetes/

7. **Access Services**:
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

## Git Workflow

Branches:

- user-service: Development of User Service (Helly, Jiyad).
- product-service: Development of Product Service (Nicholas, Niraj).
- order-service: Development of Order Service (Helly, Jiyad).
- notification-service: Development of Notification Service (Nicholas, Niraj).
- main: Stable branch with merged, production-ready code.

Workflow:
- Checkout the relevant branch:
```bash
    git checkout user-service
```
- Make changes and commit:
    ```bash
    git add .
    git commit -m "Descriptive commit message"
    git push origin user-service
    ```
- Create a pull request on GitHub to merge into main.
- Nicholas Ilechie reviews the PR then merge after approval and resolve any conflicts.
- Regularly sync with main:
    ```bash
    git pull origin main



## Next Steps
- Implement Order and Notification Services (Week 9).
- Deploy to Kubernetes (Week 9-10).
- Set up CI/CD and monitoring (Week 11).
- Prepare final presentation (Week 12).