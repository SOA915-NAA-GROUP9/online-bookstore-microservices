# API Contracts

## User Service
- `POST /users/register`: Register a new user.
  - Request: `{ "username": "string", "password": "string", "email": "string" }`
  - Response: `{ "userId": "string", "message": "User created" }`
- `POST /users/login`: Authenticate a user.
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "string" }`
- `GET /users/{id}`: Get user details.
  - Response: `{ "id": "string", "username": "string", "email": "string" }`
- `PUT /users/{id}`: Update user profile.
  - Request: `{ "email": "string", "name": "string" }`
  - Response: `{ "message": "User updated" }`

## Product Service
- `GET /books`: List all books.
  - Query: `?genre=string&author=string`
  - Response: `[{ "id": "string", "title": "string", "author": "string", "price": number }]`
- `GET /books/{id}`: Get book details.
  - Response: `{ "id": "string", "title": "string", "author": "string", "price": number }`
- `POST /books`: Add a new book (admin-only).
  - Request: `{ "title": "string", "author": "string", "price": number }`
  - Response: `{ "id": "string", "message": "Book added" }`
- `PUT /books/{id}`: Update book details (admin-only).
  - Request: `{ "title": "string", "author": "string", "price": number }`
  - Response: `{ "message": "Book updated" }`

## Order Service
- `POST /orders`: Create a new order.
  - Request: `{ "userId": "string", "bookIds": ["string"] }`
  - Response: `{ "orderId": "string", "message": "Order created" }`
- `GET /orders/{id}`: Get order details.
  - Response: `{ "orderId": "string", "userId": "string", "books": ["string"], "status": "string" }`
- `PUT /orders/{id}/status`: Update order status.
  - Request: `{ "status": "string" }`
  - Response: `{ "message": "Order status updated" }`

## Notification Service
- `POST /notifications/email`: Send email notification.
  - Request: `{ "recipient": "string", "message": "string" }`
  - Response: `{ "message": "Email sent" }`
- `POST /notifications/sms`: Send SMS notification.
  - Request: `{ "phone": "string", "message": "string" }`
  - Response: `{ "message": "SMS sent" }`