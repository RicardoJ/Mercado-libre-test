/**
 * @param {string} searchList stores search list in localStorage.
 */
export const saveSearch = searchList => {
  try {
    return window.localStorage.setItem(
      'searchList',
      JSON.stringify(searchList),
    );
  } catch (error) {
    return false;
  }
};
/** get search list from localStorage. */
export const getSearchList = () => {
  try {
    const state = JSON.parse(window.localStorage.getItem('searchList'));
    return state;
  } catch (error) {
    return {};
  }
};
