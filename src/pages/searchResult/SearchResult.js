import React from 'react';
import SearchResultList from '../../components/SearchResultList';
import './styles.scss';

const SearchResult = () => (
  <>
    <section className='ui-search-result'>
      <ol className='ui-search-layout'>
        <SearchResultList />
      </ol>
    </section>
  </>
);
export default SearchResult;
