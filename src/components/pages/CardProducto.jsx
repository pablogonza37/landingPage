import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ( {producto} ) => {
    return (
        <Col md={4} lg={3} sm={6} className='mb-3'>
          <div className="card px-3 pt-3">
            <div className="image">
              <img
                className="card-img-top-nueva"
                src={producto.imagen}
                alt=""
              />
            </div>
            <span className="title">{producto.nombreProducto}</span>
            <span className="price">${producto.precio}</span>
          </div>
        </Col>
    );
};

export default CardProducto;