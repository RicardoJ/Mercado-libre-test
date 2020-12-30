import React from 'react';
import searchIcon from '../assets/images/ic_Search.png';

const SearchInput = () => {
  return (
    <form className='nav-search'>
      <input
        className='nav-search__input'
        autoFocus
        maxlLength='120'
        type='text'
        placeholder='Nunca dejes de buscar'
      />
      <button className='nav-search__btn' type='submit'>
        <img src={searchIcon} alt='search' />
      </button>
    </form>
  );
};

export default SearchInput;
