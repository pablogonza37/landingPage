import React from 'react';
import Banner from './inicio/Banner';
import Servicios from './inicio/Servicios';
import Nosotros from './inicio/Nosotros';
import Imagenes from './inicio/Imagenes';

const Inicio = () => {
    return (
        <section className='mainSection'>
          <Banner></Banner> 
          <Servicios></Servicios> 
          <Nosotros></Nosotros>
          <Imagenes></Imagenes>
        </section>
    );
};

export default Inicio;