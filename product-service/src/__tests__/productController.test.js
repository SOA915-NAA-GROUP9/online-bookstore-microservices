const { getAllBooks, getBookById } = require('../productController');

describe('Product Controller Unit Tests', () => {
  test('should get all books', () => {
    const books = getAllBooks();
    expect(books.length).toBe(1);
    expect(books[0]).toEqual({
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.99
    });
  });

  test('should get book by ID', () => {
    const book = getBookById('1');
    expect(book).toEqual({
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.99
    });
  });

  test('should throw error for invalid ID', () => {
    expect(() => getBookById('999')).toThrow('Book not found');
  });
});