import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Servicios = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-5">Nuestros servicios</h3>
      <Row className="g-4"> {/* Asegúrate de que haya un espaciado entre las columnas */}
        <Col md={3} className="d-flex">
        
          <div className="card flex-fill">
          <i className="bi bi-cup-hot-fill iconos"></i>
            <div className="icon"></div>
            <strong>Café de Especialidad</strong>
            <div className="card__body">
              Disfruta de una amplia variedad de cafés gourmet, preparados por nuestros expertos baristas.
            </div>
          </div>
        </Col>
        <Col md={3} className="d-flex">
          <div className="card flex-fill">
          <i className="bi bi-cake2-fill iconos"></i>
            <div className="icon"></div>
            <strong>Repostería Artesanal</strong>
            <div className="card__body">
              Prueba nuestros pasteles y panes frescos, elaborados con ingredientes de alta calidad.
            </div>
          </div>
        </Col>
        <Col md={3} className="d-flex">
          <div className="card flex-fill">
          <i className="bi bi-wifi iconos"></i>
            <div className="icon"></div>
            <strong>Wi-Fi Gratis</strong>
            <div className="card__body">
              Conéctate sin problemas con nuestra conexión Wi-Fi rápida y estable.
            </div>
          </div>
        </Col>
        <Col md={3} className="d-flex">
          <div className="card flex-fill shadow">
          <i className="bi bi-people-fill iconos"></i>
            <div className="icon"></div>
            <strong>Espacios de Reuniones</strong>
            <div className="card__body">
              Disponemos de espacios cómodos para reuniones de trabajo o encuentros sociales.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Servicios;
