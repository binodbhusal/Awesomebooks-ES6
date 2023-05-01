/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { listSection, bookSection, contactSection } from './eventlisteners.js';

export const hideSection = () => {
  listSection.classList.add('hidden');
  bookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
};
