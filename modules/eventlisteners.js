
import { hideSection } from "./otherfunction.js";
export const listSection = document.getElementById('list-section');
export const bookSection = document.getElementById('book-section');
export const contactSection = document.getElementById('contact-section');
export const btnsClick = () => {
const listBtn = document.getElementById('list-link');
const bookBtn = document.getElementById('book-link') 
const contactBtn = document.getElementById('contact-link');
    bookBtn.addEventListener('click', () => {
        hideSection();
        bookSection.classList.remove('hidden');
    });
    contactBtn.addEventListener('click', () => {
        hideSection();
        contactSection.classList.remove('hidden');
    });
    listBtn.addEventListener('click', () => {
        hideSection();
    listSection.classList.remove('hidden');
    })
    }