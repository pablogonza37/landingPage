import { Col, Container, Row, Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Nosotros = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <Container className="container my-5">
      <Row>
        <Col
          md={6}
          className="p-lg-5 p-md-4 text-bg-light d-flex align-items-center lead text-dark-emphasis my-4 shadow"
        >
          "Nos enorgullecemos de ser mucho más que una
          simple cafetería; somos un refugio para los amantes del café y un
          lugar de encuentro para quienes buscan un ambiente acogedor y
          auténtico. Ubicados en el corazón de la ciudad, nuestra cafetería
          ofrece un espacio moderno y cálido, donde cada rincón está pensado
          para que te sientas como en casa. 
          Disfruta de una
          amplia selección de cafés de origen, preparados con granos de la más
          alta calidad que seleccionamos cuidadosamente para ti. Desde un
          expreso intenso hasta un capuchino suave y cremoso, nuestro menú está
          diseñado para satisfacer todos los gustos. Además, ofrecemos una
          variedad de tés aromáticos, pasteles recién horneados y bocadillos
          gourmet que complementarán perfectamente tu bebida."
        </Col>
        <Col md={6} className="p-lg-5 p-md-4">
          <img
            src="https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg"
            alt=""
            className="img-fluid " data-aos="fade-left"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
