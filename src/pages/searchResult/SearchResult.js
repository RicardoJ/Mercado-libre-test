import React from 'react';
import SearchList from '../../components/searchList/SearchList';
import './styles.scss';

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
