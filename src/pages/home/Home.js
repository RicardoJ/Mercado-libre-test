import React from 'react';
import logoMercadoLibre from '../../assets/images/Logo_ML@2x.png.png';
import { WELCOME_TO_MERCADOLIBRE } from '../../constants';
/**
 *  @description First page to be rendered.
 *  @constant
 *  @type {string} - [WELCOME_TO_MERCADOLIBRE].
 *  @default
 */
const Home = () => (
  <>
    <h1>{WELCOME_TO_MERCADOLIBRE}</h1>
    <img src={logoMercadoLibre} alt='logo mercado libre' />
  </>
);
export default Home;
