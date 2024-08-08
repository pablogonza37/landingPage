import React from 'react';
import Banner from './inicio/Banner';
import Servicios from './inicio/Servicios';

const Inicio = () => {
    return (
        <section className='mainSection'>
          <Banner></Banner> 
          <Servicios></Servicios> 
        </section>
    );
};

export default Inicio;