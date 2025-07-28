const axios = require('axios');

describe('End-to-End Tests for Bookstore', () => {
  const userServiceUrl = 'http://localhost:3000';
  const productServiceUrl = 'http://localhost:3001';

  test('User can register and browse books', async () => {
    // Step 1: Register a user
    const registerResponse = await axios.post(`${userServiceUrl}/users/register`, {
      username: 'e2e_user',
      email: 'e2e@example.com'
    });
    expect(registerResponse.status).toBe(201);
    const userId = registerResponse.data.userId;

    // Step 2: Fetch user details
    const userResponse = await axios.get(`${userServiceUrl}/users/${userId}`);
    expect(userResponse.status).toBe(200);
    expect(userResponse.data.username).toBe('e2e_user');

    // Step 3: Browse books
    const booksResponse = await axios.get(`${productServiceUrl}/books`);
    expect(booksResponse.status).toBe(200);
    expect(booksResponse.data.length).toBeGreaterThan(0);
  });
});