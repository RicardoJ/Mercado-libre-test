import React from 'react';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML@2x.png.png';
import shipping from '../../assets/images/ic_shipping.png';

const SearchResult = () => (
  <>
    <section className='ui-search-result'>
      <ol className='ui-search-layout'>
        <li className='ui-search-layout__item'>
          <div className='ui-search-result__image'>
            <a  href='#'  title='titulo get endpoint'>
              <img
                className='ui-search-result-image__element'
                width='180'
                height='180'
                src={logoMercadoLibre}
                alt='logo mercado libre'
              />
            </a>
          </div>

          <div className='ui-search-result__content'>
            <div className='ui-search-item__group'>
              <a href='#' className='ui-search-link'>$1.908</a>
              <img src={shipping} alt='shipping' />
            </div>

            <div className='ui-search-item__group--title'>
              <a href='#'>
                title Apple ipd Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </a>
            </div>
          </div>

          <div className='ui-search-result__location'>ciudad</div>
        </li>
      </ol>
    </section>
  </>
);
export default SearchResult;
