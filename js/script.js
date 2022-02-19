import { Book } from './book.js';

const addBookBtn = document.querySelector('#add');
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  if (title.value !== '' && author.value !== '') {
    const book = new Book(title.value, author.value);
    book.add();
    title.value = '';
    author.value = '';
    Book.displayBooks();
    localStorage.setItem('books', JSON.stringify(Book.books));
    const successParagragh = document.querySelector('#add-book-success');
    successParagragh.classList.toggle('d-none');
    setTimeout(() => {
      successParagragh.classList.toggle('d-none');
    }, 1000);
  }
});

if (localStorage.getItem('books') !== null) {
  Book.books = JSON.parse(localStorage.getItem('books'));
}

Book.displayBooks();
const listLink = document.querySelector('#list-link');
const newLink = document.querySelector('#new-link');
const contactLink = document.querySelector('#contact-link');

const listSection = document.querySelector('.books-list');
const newSection = document.querySelector('.add-books');
const contactSection = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  listSection.classList.add('show');
  newSection.classList.remove('show');
  contactSection.classList.remove('show');
  listLink.classList.add('active');
  newLink.classList.remove('active');
  contactLink.classList.remove('active)');
});

newLink.addEventListener('click', () => {
  listSection.classList.remove('show');
  newSection.classList.add('show');
  contactSection.classList.remove('show');
  listLink.classList.remove('active');
  newLink.classList.add('active');
  contactLink.classList.remove('active)');
});

contactLink.addEventListener('click', () => {
  listSection.classList.remove('show');
  newSection.classList.remove('show');
  contactSection.classList.add('show');
  listLink.classList.remove('active');
  newLink.classList.remove('active');
  contactLink.classList.add('active');
});

const time = document.querySelector('.time');
const now = luxon.DateTime.now();// eslint-disable-line no-undef
const date = luxon.DateTime.fromISO(now);// eslint-disable-line no-undef
time.innerHTML = date.toLocaleString(luxon.DateTime.DATETIME_MED);// eslint-disable-line no-undef