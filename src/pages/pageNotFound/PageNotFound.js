import React from 'react';
import logoMercadoLibre from '../../assets/images/Logo_ML@2x.png.png';
import { PAGE_NOT_FOUND } from '../../constants';

/**
 *  Page when there is no match in the url.
 *  @constant
 *  @type {string} - [PAGE_NOT_FOUND].
 *  @default
 */
const PageNotFound = () => (
  <>
    <h1>{PAGE_NOT_FOUND}</h1>
    <img src={logoMercadoLibre} alt='logo mercado libre' />
  </>
);

export default PageNotFound;
