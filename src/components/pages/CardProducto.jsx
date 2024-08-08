import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ( { producto, obtenerIdProducto } ) => {
    return (
        <Col md={4} lg={3} sm={6} className='mb-3'>
          <div className="card px-3 pt-3"  onClick={() => {
                    obtenerIdProducto(producto._id);
                  }}>
            <div className="image">
              <img
                className="card-img-top-nueva"
                src={producto.imagen}
                alt="imagen producto"
              />
            </div>
            <span className="title">{producto.nombreProducto}</span>
            <span className="price">${producto.precio}</span>
          </div>
          
        </Col>
    );
};

export default CardProducto;