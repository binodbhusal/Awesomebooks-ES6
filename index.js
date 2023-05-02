import { DateTime } from './modules/luxon/src/luxon.js';
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

  const updateDateTime = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    datetimeOutput.textContent = now;
  };
  updateDateTime();
  setInterval(updateDateTime, 1000);
};
const loadPage = () => {
  hideSection();
  listSection.classList.remove('hidden');
  book.getStorage();
  book.displayBooks();
  DateTime1();
};
loadPage();
