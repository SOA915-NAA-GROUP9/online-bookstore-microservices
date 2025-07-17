const express = require('express');
const app = express();
app.use(express.json());

// In-memory book storage (replace with database later)
let books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
  { id: '2', title: '1984', author: 'George Orwell', price: 8.99 }
];

// GET /books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

app.listen(3001, () => console.log('Product Service running on port 3001'));