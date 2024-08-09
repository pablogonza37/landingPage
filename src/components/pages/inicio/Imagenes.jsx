import { Container, Row, Col  } from "react-bootstrap";

const Imagenes = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={8}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/3952080/pexels-photo-3952080.jpeg"
            alt=""
          />
        </Col>
        <Col xs={12} md={4} className="m-lg-auto m-md-auto">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/2956952/pexels-photo-2956952.jpeg"
            alt=""
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg"
            alt=""
          />
        </Col>
        <Col xs={12} md={4}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/4350210/pexels-photo-4350210.jpeg"
            alt=""
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/6205769/pexels-photo-6205769.jpeg"
            alt=""
          />
        </Col>
        <Col xs={6}>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/4063860/pexels-photo-4063860.jpeg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Imagenes;
