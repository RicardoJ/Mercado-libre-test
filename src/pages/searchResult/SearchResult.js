import React from 'react';
import SearchList from '../../components/searchList/SearchList';
import './styles.scss';

/**
 * @description Page search results.
 * @returns list of searched products.
 */
const SearchResult = () => (
  <>
    <section className='ui-search-result'>
      <ol className='ui-search-layout'>
        <SearchList />
      </ol>
    </section>
  </>
);
export default SearchResult;
