
import { btnsClick } from "./modules/eventlisteners.js";
import { listSection } from "./modules/eventlisteners.js";
import { hideSection } from "./modules/otherfunction.js";


btnsClick();

const btnAdd = document.getElementById('btnAdd');
import { BookList } from "./modules/bookclass.js";
const book=new BookList();
btnAdd.addEventListener('click', () => {
    book.addBook();
});
const loadPage= () => {
    hideSection();
    listSection.classList.remove('hidden');
    book.getStorage();
    book.displayBooks();
   
};
loadPage();





