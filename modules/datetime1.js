import { DateTime } from './luxon/src/luxon.js';

export const DateTime1 = () => {
  const datetimeOutput = document.getElementById('datetime-output');

  const updateDateTime = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    datetimeOutput.textContent = now;
  };
  updateDateTime();
  setInterval(updateDateTime, 1000);
};
export default DateTime1;
