// check if there is any saved data
export default function localData(value) {
  if (process.browser) {
    if (localStorage.getItem(value)) {
      return JSON.parse(localStorage.getItem(value));
    }
  }
};
