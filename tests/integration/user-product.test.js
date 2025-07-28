const axios = require('axios');

describe('User and Product Service Integration', () => {
  const userServiceUrl = 'http://localhost:3000';
  const productServiceUrl = 'http://localhost:3001';

  test('Register user, fetch all users, fetch user by ID, and fetch books', async () => {
    // Register a user
    const userResponse = await axios.post(`${userServiceUrl}/users/register`, {
      username: 'test_user',
      email: 'test@example.com'
    });
    expect(userResponse.status).toBe(201);
    expect(userResponse.data.userId).toBeDefined();

    // Fetch all users
    const usersResponse = await axios.get(`${userServiceUrl}/users`);
    expect(usersResponse.status).toBe(200);
    expect(usersResponse.data.length).toBeGreaterThan(0);

    // Fetch user by ID
    const userId = userResponse.data.userId;
    const userDetails = await axios.get(`${userServiceUrl}/users/${userId}`);
    expect(userDetails.status).toBe(200);
    expect(userDetails.data.username).toBe('test_user');

    // Fetch books
    const booksResponse = await axios.get(`${productServiceUrl}/books`);
    expect(booksResponse.status).toBe(200);
    expect(booksResponse.data.length).toBeGreaterThan(0);
  });
});