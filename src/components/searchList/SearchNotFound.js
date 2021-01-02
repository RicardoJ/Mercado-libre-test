import React from 'react';
import { NO_MATCHING_PUBLICATIONS, SEARCH_RESCUE } from '../../constants';

/**
 * @description return search not found.
 * @constant
 * @type {string} [NO_MATCHING_PUBLICATIONS].
 * @type {array} [SEARCH_RESCUE].
 * @default
 */
const SearchNotFound = () => {
  return (
    <div className='ui-rescue'>
      <h1>{NO_MATCHING_PUBLICATIONS}</h1>
      <ul className='ui-rescue-list'>
        {SEARCH_RESCUE.map((item, index) => (
          <li key={index} className='ui-rescue-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchNotFound;
