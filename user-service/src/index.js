const express = require('express');
const app = express();
app.use(express.json());

// In-memory user storage (replace with database later)
let users = [
  { id: '1', username: 'john_doe', email: 'john@example.com' }
];

// POST /users/register
app.post('/users/register', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: 'Username and email required' });
  }
  const user = { id: String(users.length + 1), username, email };
  users.push(user);
  res.status(201).json({ userId: user.id, message: 'User created' });
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.listen(3000, () => console.log('User Service running on port 3000'));