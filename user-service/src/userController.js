let users = [];

const resetUsers = () => {
  users = [{ id: '1', username: 'john_doe', email: 'john@example.com' }];
};

const registerUser = (username, email) => {
  if (!username || !email) {
    throw new Error('Username and email required');
  }
  const user = { id: String(users.length + 1), username, email };
  users.push(user);
  return { userId: user.id, message: 'User created' };
};

const getAllUsers = () => users;

const getUserById = (id) => {
  const user = users.find(u => u.id === id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

module.exports = { registerUser, getAllUsers, getUserById, resetUsers };