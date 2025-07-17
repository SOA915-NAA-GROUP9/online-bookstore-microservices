# API Contracts

## User Service
- **POST /users/register**: Register a new user.
  - Request: `{ "username": "string", "email": "string" }`
  - Response: `{ "userId": "string", "message": "User created" }`
  - Example:
    ```bash
    curl -X POST http://localhost:3000/users/register -H "Content-Type: application/json" -d '{"username":"john_doe","email":"john@example.com"}'
    ```
    Response: `{ "userId": "1", "message": "User created" }`
- **GET /users/{id}**: Get user details.
  - Response: `{ "id": "string", "username": "string", "email": "string" }`
  - Example:
    ```bash
    curl http://localhost:3000/users/1
    ```
    Response: `{ "id": "1", "username": "john_doe", "email": "john@example.com" }`

## Product Service
- **GET /books**: List all books.
  - Response: `[{ "id": "string", "title": "string", "author": "string", "price": number }]`
  - Example:
    ```bash
    curl http://localhost:3001/books
    ```
    Response: `[{ "id": "1", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.99 }, ...]`
- **GET /books/{id}**: Get book details.
  - Response: `{ "id": "string", "title": "string", "author": "string", "price": number }`
  - Example:
    ```bash
    curl http://localhost:3001/books/1
    ```
    Response: `{ "id": "1", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.99 }`