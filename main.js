import Book from './Book.js';
import UI from './UI.js';
import Store from './Store.js';
/*
      Add Events to the Page
*/

// Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book
document.querySelector('#form-book-submit').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default submission

  // Get Book Values
  const name = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;

  // Add Simple Validation && Create the Book && Add to UI
  if (name === '' || author === '') {
    UI.showAlert('PLEASE FILL IN ALL FIELDS', 'danger');
  } else {
    const book = new Book(name, author);

    UI.addBookToList(book);
    Store.addBook(book);

    UI.showAlert('Book Added', 'success');
    UI.clearFields();
  }
});

// Event : Remove a Book
document.querySelector('#display-book').addEventListener('click', (e) => {
  UI.delBook(e.target);
  Store.rmBook(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  UI.showAlert('Book Removed', 'success');
});
