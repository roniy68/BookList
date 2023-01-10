// Storage: Handle Local Storage
export default class Store {
  // Get books from local storage
  static getBooks() {
    let books;
    if (localStorage.getItem('book-list') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('book-list'));
    }

    return books;
  }

  // Add books to local storage
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('book-list', JSON.stringify(books));
  }

  // Remove books from local storage
  static rmBook(name) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.name === name) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('book-list', JSON.stringify(books));
  }
}
