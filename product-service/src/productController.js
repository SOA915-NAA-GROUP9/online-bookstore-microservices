// Extracted logic for unit testing
let books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 }
];

const getAllBooks = () => books;

const getBookById = (id) => {
  const book = books.find(b => b.id === id);
  if (!book) {
    throw new Error('Book not found');
  }
  return book;
};

module.exports = { getAllBooks, getBookById };