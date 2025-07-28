const express = require('express');
const { registerUser, getAllUsers, getUserById } = require('./userController');
const app = express();
app.use(express.json());

// POST /users/register
app.post('/users/register', (req, res) => {
  try {
    const { username, email } = req.body;
    const result = registerUser(username, email);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /users
app.get('/users', (req, res) => {
  res.json(getAllUsers());
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  try {
    const user = getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.listen(3000, () => console.log('User Service running on port 3000'));