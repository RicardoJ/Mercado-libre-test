export const saveSearch = searchState => {
  try {
    return window.localStorage.setItem('searchList', JSON.stringify(searchState));
  } catch (error) {
    return false;
  }
};

export const getSearchState = () => {
  try {
    const state = JSON.parse(window.localStorage.getItem('searchList'));
    return state;
  } catch (error) {
    return {};
  }
};
