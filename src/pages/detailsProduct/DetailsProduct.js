import React from 'react';
import './styles.scss';
import logoMercadoLibre from '../../assets/images/Logo_ML.png';

const DetailsProduct = () => {
  return (
    <section className='ui-detail-container'>
      <div className='ui-detail-container__colleft'>
        <figure className='ui-figure'>
          <img height='180'  src={logoMercadoLibre} alt='logo mercado libre' />
        </figure>
        <div className='ui-detail-description'>
          <div className='ui-detail-description__title'>
            Descripción del producto
          </div>
          <div className='ui-detail-description__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            molestiae aperiam labore tempora qui facilis similique eum maiores
            tenetur dolore, provident temporibus architecto numquam aut
            consectetur officiis eos quo distinctio!
          </div>
        </div>
      </div>
      <div className='ui-detail-container__colright'>
        <div className='ui-subtitle'>Nuevo -234 vendidos</div>
        <div className='ui-title'>title</div>
        <div className='ui-price'>$1900 </div>
        <form>
          <div className='ui-actions__container'>
            <button className='ui-button'>Comprar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DetailsProduct;
