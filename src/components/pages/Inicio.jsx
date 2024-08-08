import React from 'react';
import Banner from './inicio/Banner';
import Servicios from './inicio/Servicios';
import Nosotros from './inicio/Nosotros';

const Inicio = () => {
    return (
        <section className='mainSection'>
          <Banner></Banner> 
          <Servicios></Servicios> 
          <Nosotros></Nosotros>
        </section>
    );
};

export default Inicio;