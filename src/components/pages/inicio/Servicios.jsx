import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Servicios = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="p-5 bg-black">


      <h2 className="mb-5 tituloServicios" data-aos="zoom-in">Nuestros servicios</h2>
      <Row className="g-6 my-5"> 
        <Col md={3} sm={6} className="d-flex">
        
          <div className="cardServicios flex-fill" data-aos="zoom-out-up">
          <i className="bi bi-cup-hot-fill iconos"></i>
            <div className="icon"></div>
            <strong>Café de Especialidad</strong>
            <div className="card__body">
              Disfruta de una amplia variedad de cafés gourmet, preparados por nuestros expertos baristas.
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} className="d-flex" data-aos="zoom-out-up">
          <div className="cardServicios flex-fill">
          <i className="bi bi-cake2-fill iconos"></i>
            <div className="icon"></div>
            <strong>Repostería Artesanal</strong>
            <div className="card__body">
              Prueba nuestros pasteles y panes frescos, elaborados con ingredientes de alta calidad.
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} className="d-flex" data-aos="zoom-out-up">
          <div className="cardServicios flex-fill">
          <i className="bi bi-wifi iconos"></i>
            <div className="icon"></div>
            <strong>Wi-Fi Gratis</strong>
            <div className="card__body">
              Conéctate sin problemas con nuestra conexión Wi-Fi rápida y estable.
            </div>
          </div>
        </Col>
        <Col md={3} sm={6} className="d-flex" data-aos="zoom-out-up">
          <div className="cardServicios flex-fill shadow">
          <i className="bi bi-people-fill iconos"></i>
            <div className="icon"></div>
            <strong>Espacios de Reuniones</strong>
            <div className="card__body">
              Disponemos de espacios cómodos para reuniones de trabajo o encuentros sociales.
            </div>
          </div>
        </Col>
      </Row>
      
    </section>
  );
};

export default Servicios;
