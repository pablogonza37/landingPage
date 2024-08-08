import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Productos = () => {
  return (
    <Container className="my-3">
      <h4 className="display-3 mb-3 text-center">Productos</h4>

      <Row>
        <Col md={4}>
          <div class="card">
            <div class="image">
              <img
                className="card-img-top-nueva"
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
                alt=""
              />
            </div>
            <span class="title">Cool Chair</span>
            <span class="price">$100</span>
          </div>
        </Col>

        <Col md={4}>
          <div class="card">
            <div class="image">
              <img
                className="card-img-top-nueva"
                src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg"
                alt=""
              />
            </div>
            <span class="title">Cool Chair</span>
            <span class="price">$100</span>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{proyectoModal.nombreProyecto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid imgModal" src={proyectoModal.imagen} alt="" />
          
            {imagenesModal.map((item, index) => (
              
              <img key={index} src={item.trim()} className="img-fluid imgModal mt-2" alt="" />
            ))}
          
          <p className="mt-2">{proyectoModal.descripcion}</p>
          <hr />
          <p>Tecnologias:</p>
          <ul>
            {tecnologiaModal.map((item, index) => (
              <li key={index}><Badge bg="info">{item.trim()}</Badge></li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" href={proyectoModal.github} target="_blank">
            <i className="bi bi-github"> Github</i>
          </Button>
          <Button variant="primary" className="ms-2" href={proyectoModal.deploy} target="_blank">
            <i className="bi bi-rocket-takeoff"> Lanzar</i>
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default Productos;
