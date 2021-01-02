import React from 'react';

const SearchNotFound = () => {
  return (
    <div className='ui-rescue'>
      <h1>🔍 No hay publicaciones que coincidan con tu búsqueda.</h1>
      <ul className='ui-rescue-list'>
        <li className='ui-rescue-item'>Revisa la ortografía de la palabra.</li>
        <li className='ui-rescue-item'>
          Utiliza palabras más genéricas o menos palabras.
        </li>
      </ul>
    </div>
  );
};

export default SearchNotFound;
