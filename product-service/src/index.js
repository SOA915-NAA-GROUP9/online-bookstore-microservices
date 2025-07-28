const express = require('express');
const { getAllBooks, getBookById } = require('./productController');
const app = express();
app.use(express.json());

// GET /books
app.get('/books', (req, res) => {
  res.json(getAllBooks());
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  try {
    const book = getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.listen(3001, () => console.log('Product Service running on port 3001'));