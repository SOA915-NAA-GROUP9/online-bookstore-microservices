const { registerUser, getAllUsers, getUserById, resetUsers } = require('../userController');

describe('User Controller Unit Tests', () => {
  beforeEach(() => {
    resetUsers(); // Reset users array before each test
  });

  test('should register a new user', () => {
    const result = registerUser('jane_doe', 'jane@example.com');
    expect(result).toEqual({ userId: '2', message: 'User created' });
  });

  test('should throw error for missing username', () => {
    expect(() => registerUser('', 'jane@example.com')).toThrow('Username and email required');
  });

  test('should get all users', () => {
    const users = getAllUsers();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual({ id: '1', username: 'john_doe', email: 'john@example.com' });
  });

  test('should get user by ID', () => {
    const user = getUserById('1');
    expect(user).toEqual({ id: '1', username: 'john_doe', email: 'john@example.com' });
  });

  test('should throw error for invalid ID', () => {
    expect(() => getUserById('999')).toThrow('User not found');
  });
});