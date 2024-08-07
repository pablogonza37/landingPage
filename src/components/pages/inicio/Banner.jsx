import React from "react";
import imgBanner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section className="shadow">
      <div className="position-relative">
        <div className="slogan">
          <h1 className="display-2  tituloSeccion">
            Más que café, un momento especial.
          </h1>
          <div className='containerBtn mt-4'>
          <button className='btnProductos'>EXPLORA LOS PRODUCTOS</button>
          </div>
        </div>
        <div className="banner">
          <img className="img-fluid" src={imgBanner} alt="imagen banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
