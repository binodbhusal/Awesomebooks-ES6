import { listSection } from "./eventlisteners.js";
import { bookSection } from "./eventlisteners.js";
import { contactSection } from "./eventlisteners.js";


export const hideSection = () => {
    listSection.classList.add('hidden');
    bookSection.classList.add('hidden');
    contactSection.classList.add('hidden');
};
