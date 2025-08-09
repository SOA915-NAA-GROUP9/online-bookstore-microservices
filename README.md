# Online Bookstore Microservices

**Course**: Service-Oriented Architecture (SOA915-NAA-GROUP9)  
**Team**: Nicholas Nwanua Ilechie (Leader), Helly Rajeshbhai Patel, Jiyad Mohammed Arif Shaikh, Nirajbhai Ranchhodbhai Limbasiya  
**Date**: November 2025  
**Repository**: [https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices](https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices)

[![CI/CD Pipeline](https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices/actions/workflows/ci-cd.yaml/badge.svg)](https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices/actions/workflows/ci-cd.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cloud-native microservices-based online bookstore built with Node.js, Docker, and Kubernetes, featuring comprehensive monitoring, logging, and CI/CD pipeline.

## 📋 Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Monitoring & Logging](#monitoring--logging)
- [CI/CD Pipeline](#cicd-pipeline)
- [Demo](#demo)
- [Team](#team)
- [Contributing](#contributing)

## 🎯 Overview

This project implements a microservices-based online bookstore system as part of the Service-Oriented Architecture (SOA915-NAA) course. It demonstrates modern cloud-native development practices including containerization, orchestration, monitoring, and automated testing.

### Key Components
- **User Service**: Handles user registration and profile management
- **Product Service**: Manages book catalog and inventory
- **Monitoring Stack**: Prometheus metrics collection and Grafana visualization
- **Centralized Logging**: Fluentd for log aggregation
- **CI/CD Pipeline**: Automated testing and deployment with GitHub Actions

## 🏗️ Architecture

![Architecture Diagram](docs/architecture.png)

### Services Overview
| Service | Port | Endpoints | Storage |
|---------|------|-----------|---------|
| User Service | 3000 | `/users/register` (POST), `/users` (GET) | In-memory |
| Product Service | 3001 | `/books` (GET) | In-memory |
| Prometheus | 9090 | Metrics collection | - |
| Grafana | 3000 | Monitoring dashboards | - |

### Technology Stack
- **Runtime**: Node.js 18
- **Containerization**: Docker
- **Orchestration**: Kubernetes (Minikube)
- **Monitoring**: Prometheus + Grafana
- **Logging**: Fluentd
- **CI/CD**: GitHub Actions
- **Testing**: Jest, Supertest, Postman

## ✨ Features

- 🚀 **Microservices Architecture**: Loosely coupled services with RESTful APIs
- 🐳 **Containerized Deployment**: Docker containers for all services
- ☸️ **Kubernetes Orchestration**: Full K8s deployment with services, deployments, and HPA
- 📊 **Comprehensive Monitoring**: Real-time metrics and custom dashboards
- 📝 **Centralized Logging**: Structured logging with Fluentd
- 🧪 **Multi-level Testing**: Unit, integration, and E2E tests
- 🔄 **CI/CD Pipeline**: Automated build, test, and deployment
- 📋 **API Documentation**: Postman collection for easy testing

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Minikube**: [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
- **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
- **Node.js**: Version 18+ [Install Node.js](https://nodejs.org/)
- **Git**: [Install Git](https://git-scm.com/downloads)
- **Postman** (optional): [Install Postman](https://www.postman.com/downloads/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices.git
cd online-bookstore-microservices
```

### 2. Start Minikube
```bash
minikube start --driver=docker
```

### 3. Create Namespace
```bash
kubectl create namespace bookstore
```

### 4. Deploy to Kubernetes
```bash
# Deploy all services
kubectl apply -f kubernetes/ -n bookstore

# Deploy logging
kubectl apply -f logging/ -n bookstore
```

### 5. Verify Deployment
```bash
kubectl get pods -n bookstore
```

Expected output:
```
NAME                               READY   STATUS    RESTARTS   AGE
fluentd-xxxxx                     1/1     Running   0          10m
grafana-6fd88c4747-rl7ns          1/1     Running   0          10m
product-service-5dfbcbc586-bfrnz  1/1     Running   0          10m
product-service-5dfbcbc586-rzz2g  1/1     Running   0          10m
prometheus-6b98fd8fff-2hkwp       1/1     Running   0          10m
user-service-574f55db9-q7ksb      1/1     Running   0          10m
user-service-574f55db9-tfmmm      1/1     Running   0          10m
```

### 6. Get Service URLs
```bash
# Get Minikube IP
minikube ip

# Get NodePorts
kubectl get svc user-service -n bookstore -o jsonpath='{.spec.ports[0].nodePort}'
kubectl get svc product-service -n bookstore -o jsonpath='{.spec.ports[0].nodePort}'
```

## 📚 API Documentation

### User Service

#### Register User
```http
POST http://<minikube-ip>:<nodeport>/users/register
Content-Type: application/json

{
  "username": "jane_doe",
  "email": "jane@example.com"
}
```

**Response**: `201 Created`
```json
{
  "userId": "2",
  "message": "User created"
}
```

#### Get All Users
```http
GET http://<minikube-ip>:<nodeport>/users
```

**Response**: `200 OK`
```json
[
  {
    "id": "1",
    "username": "john_doe",
    "email": "john@example.com"
  }
]
```

### Product Service

#### Get All Books
```http
GET http://<minikube-ip>:<nodeport>/books
```

**Response**: `200 OK`
```json
[
  {
    "id": "1",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 12.99
  }
]
```

### Postman Collection
Import the Postman collection for easy API testing:
```bash
# Import bookstore.postman_collection.json into Postman
```

## 🧪 Testing

### Unit Tests
```bash
# User Service
cd user-service/src && npm test

# Product Service
cd product-service/src && npm test
```

### Integration Tests
```bash
cd tests && npm run test:integration
```

### End-to-End Tests
```bash
cd tests && npm run test:e2e
```

### Test Logs
Test results are logged to:
- `user-service-test.log`
- `product-service-test.log`
- `integration-test.log`
- `e2e-test.log`

## 📊 Monitoring & Logging

### Prometheus Metrics
Access Prometheus dashboard:
```bash
kubectl port-forward svc/prometheus 9090:9090 -n bookstore
# Open http://localhost:9090
```

### Grafana Dashboards
Access Grafana dashboards:
```bash
kubectl port-forward svc/grafana 3000:80 -n bookstore
# Open http://localhost:3000
# Default credentials: admin/admin
```

### Fluentd Logging
View aggregated logs:
```bash
kubectl logs fluentd-<pod-hash> -n bookstore
```

Sample log output:
```json
{
  "log": "User Service running on port 3000",
  "stream": "stdout",
  "time": "2025-07-28T15:55:00Z",
  "kubernetes": {
    "pod_name": "user-service-574f55db9-q7ksb",
    "namespace": "bookstore"
  }
}
```

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions pipeline that:

- ✅ Runs unit and integration tests
- 🐳 Builds and pushes Docker images
- 📋 Validates Kubernetes manifests
- 🚀 Supports multi-branch deployment

### Pipeline Status
View the latest pipeline runs: [GitHub Actions](https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices/actions)

### Workflow Configuration
```yaml
# See .github/workflows/ci-cd.yaml for full configuration
```

## 🎬 Demo

### Quick Demo Steps
1. **Verify Kubernetes deployment**:
   ```bash
   kubectl get pods -n bookstore
   ```

2. **Test inter-service communication**:
   ```bash
   kubectl run -i --tty test-pod --image=busybox --restart=Never -n bookstore -- sh
   wget -q -O- http://user-service:80/users
   ```

3. **Run API tests with Postman**:
   - Import `bookstore.postman_collection.json`
   - Execute the test collection

4. **View logs**:
   ```bash
   kubectl logs fluentd-<hash> -n bookstore
   ```

### Demo Video
📹 [Watch the complete demo](https://1drv.ms/v/c/21D5FE69874F5A69/EVu6NWKFmrZJttCdbmVO9t0BheTOr4wMso5olpXfn0XOFQ?e=e9wDls)

## 👥 Team

**Course**: Service-Oriented Architecture (SOA915-NAA-GROUP9)

| Role | Name |
|------|------|
| Team Leader | Nicholas Nwanua Ilechie |
| Developer | Helly Rajeshbhai Patel |
| Developer | Jiyad Mohammed Arif Shaikh |
| Developer | Nirajbhai Ranchhodbhai Limbasiya |

## 🔮 Future Enhancements

- [ ] Implement Order Service for purchase management
- [ ] Add Notification Service for email alerts  
- [ ] Deploy to AWS EKS for production
- [ ] Implement custom Grafana dashboards
- [ ] Add authentication and authorization
- [ ] Implement database persistence
- [ ] Add rate limiting and circuit breakers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/SOA915-NAA-GROUP9/online-bookstore-microservices)
- **Documentation**: [docs/checkpoints/](docs/checkpoints/)
- **Architecture Diagram**: [architecture.png](docs/architecture.png)
- **Postman Collection**: [bookstore.postman_collection.json](bookstore.postman_collection.json)

---

**Built with ❤️ by SOA915-NAA-GROUP9**