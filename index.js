import { DateTime } from '../../node_modules/luxon/src/luxon.js';
import { btnsClick, listSection, hideSection } from './modules/eventlisteners.js';
import { BookList } from './modules/bookclass.js';

btnsClick();

const btnAdd = document.getElementById('btnAdd');

const book = new BookList();
btnAdd.addEventListener('click', () => {
  book.addBook();
});
const DateTime1 = () => {
  const datetimeOutput = document.getElementById('datetime-output');
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  datetimeOutput.textContent = now;
};
const loadPage = () => {
  hideSection();
  listSection.classList.remove('hidden');
  book.getStorage();
  book.displayBooks();
  DateTime1();
};
loadPage();
