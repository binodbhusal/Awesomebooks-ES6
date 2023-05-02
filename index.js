import { btnsClick, listSection, hideSection } from './modules/eventlisteners.js';
import { BookList } from './modules/bookclass.js';
import { DateTime1 } from './modules/datetime1.js';

btnsClick();

const btnAdd = document.getElementById('btnAdd');

const book = new BookList();
btnAdd.addEventListener('click', () => {
  book.addBook();
});

const loadPage = () => {
  hideSection();
  listSection.classList.remove('hidden');
  book.getStorage();
  book.displayBooks();
  DateTime1();
};
loadPage();
