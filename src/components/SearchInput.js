import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/images/ic_Search.png';
import { NEVER_STOP_LOOKING } from '../constants';
/**
 * @description component to search for a product.
 * @param {function} onChange function.
 * @param {string} value - value in input.
 */
const SearchInput = ({onChange , value}) => {
  return (
    <>
      <input
        className='nav-search__input'
        autoFocus
        onChange={onChange}
        value={value}
        maxLength='120'
        type='text'
        placeholder={NEVER_STOP_LOOKING}
      />
      <button className='nav-search__btn' type='submit'>
        <img src={searchIcon} alt='search' />
      </button>
    </>
  );
};
SearchInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };
  
export default SearchInput;
