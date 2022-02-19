let removeBtns = document.querySelectorAll('.remove');

export class Book {
  static books = [];

  static #bookDiv = document.querySelector('#books');

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    Book.books.push(this);
  }

  static remove(bookIndex) {
    Book.books.splice(bookIndex, 1);
  }

  static displayBooks() {
    this.#bookDiv.innerHTML = '';
    if (Book.books.length === 0) {
      this.#bookDiv.innerHTML = 'No book added yet.';
    }
    if (Book.books) {
      Book.books.forEach((book, index) => {
        const bookElement = `<div class="book d-flex justify-content-between p-2"><p>"${book.title}" by ${book.author}</p>
  <button class="remove btn btn-danger" id="${index}">Remove</button></div>`;
        this.#bookDiv.innerHTML += bookElement;
      });
    }
    removeBtns = document.querySelectorAll('.remove');
    removeBtns.forEach((remove) => {
      remove.addEventListener('click', (e) => {
        const bookIndex = e.target.id;
        Book.remove(bookIndex);
        localStorage.setItem('books', JSON.stringify(Book.books));
        Book.displayBooks();
      });
    });
  }
}