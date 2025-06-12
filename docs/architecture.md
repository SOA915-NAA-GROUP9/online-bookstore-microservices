# Architecture Overview

## Microservices Architecture
The online bookstore uses a microservices architecture with four core services:
- **User Service**: Manages user registration, authentication, and profiles.
- **Product Service**: Handles book catalog management.
- **Order Service**: Processes user orders.
- **Notification Service**: Sends email/SMS notifications.

## Diagram
[docs/Architecture.png]

## Service Interactions
- **User Service ↔ Product Service**: Verify user details for book browsing.
- **User Service ↔ Order Service**: Authenticate users for order placement.
- **Product Service ↔ Order Service**: Check book availability for orders.
- **Order Service → Notification Service**: Trigger notifications for order updates.

Each service has its own database to ensure loose coupling (polyglot persistence).