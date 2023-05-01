import { hideSection } from './otherfunction.js';
import { listSection } from './eventlisteners.js';

export const title = document.getElementById('title');
export const author = document.getElementById('author');
export const error = document.getElementById('error');

export class BookList {
  constructor() {
    this.myData = this.getStorage();
  }

    setStorage = () => localStorage.setItem('bookData', JSON.stringify(this.myData)) || [];

    getStorage = () => {
      this.myData = JSON.parse(localStorage.getItem('bookData')) || [];
      return this.myData;
    }

    addBook = () => {
      const newBook = { title: title.value, author: author.value };
      const authorRegex = /^[a-zA-Z\s]*$/;
      // eslint-disable-next-line max-len
      const existingBook = this.myData.some((book) => book.title === newBook.title && book.author === newBook.author);
      if (existingBook) {
        error.innerHTML = 'Duplicate Value ! already exist';
        error.style.visibility = 'visible';
      } else if (!newBook.title && !newBook.author) {
        error.innerHTML = 'Please Enter Both title and author';
        error.style.visibility = 'visible';
      } else if (!newBook.title) {
        error.innerHTML = 'Please Enter title';
        error.style.visibility = 'visible';
      } else if (!newBook.author) {
        error.innerHTML = 'Please Enter author';
        error.style.visibility = 'visible';
      } else if (!authorRegex.test(newBook.author)) {
        error.innerHTML = 'Author should be alphabet and space only';
        error.style.visibility = 'visible';
      } else {
        this.myData.push(newBook);
        this.setStorage();
        this.displayBooks();
        hideSection();
        listSection.classList.remove('hidden');
        error.style.visibility = 'hidden';
        this.empty();
      }
    }

    empty = () => {
      document.getElementById('form').reset();
    }

    removeBook = (row) => {
      const bookIndex = row.rowIndex - 1;
      this.myData.splice(bookIndex, 1);
      this.setStorage();
      this.displayBooks();
    }

    displayBooks = () => {
      const tableList = document.getElementById('tableList');
      tableList.innerHTML = '';
      this.myData.forEach((item) => {
        const row = tableList.insertRow();
        row.className = 'row';
        const celTitle = row.insertCell(0);
        const cellBY = row.insertCell(1);
        const cellAuthor = row.insertCell(2);
        const cellRemove = row.insertCell(3);
        celTitle.innerHTML = item.title;
        cellBY.innerText = 'by';
        cellAuthor.innerHTML = item.author;
        const btnRemove = document.createElement('button');
        btnRemove.className = 'btnRemove';
        btnRemove.innerText = 'Remove';
        btnRemove.addEventListener('click', () => {
          this.removeBook(row);
        });
        cellRemove.appendChild(btnRemove);
      });
    }
}
