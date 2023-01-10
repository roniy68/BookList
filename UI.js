import Store from './Store.js';
// UI Class or we can add later in Book
export default class UI {
  // UI : Display Books to the DOM
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  // UI : Add Books to the Table
  static addBookToList(book) {
    const list = document.querySelector('#display-book');
    const tr = document.createElement('tr');

    tr.innerHTML = `
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">Remove</a></td>
      `;

    list.appendChild(tr);
  }

  // UI : Delete Book From Table
  static delBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  // UI : Showing Alert to user
  static showAlert(message, className) {
    const div = document.createElement('div');
    div.setAttribute('id', 'alert');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.add-book');
    const form = document.querySelector('#form-book-submit');
    container.insertBefore(div, form);

    // Vanish the div after some time
    setTimeout(() => document.querySelector('alert').remove(), 3000);
  }

  // UI : clearing the form input fields
  static clearFields() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
  }
}
