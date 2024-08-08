import React, { useEffect, useState } from "react";
import { Form, Container, Row, Modal } from "react-bootstrap";
import { leerProductosAPI } from "../../helpers/queries";
import CardProducto from "./CardProducto";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  


  useEffect(() => {
    consultarAPI();
    filtrarProductosPorCategoria()
  }, [categoriaSeleccionada]);

  
  const consultarAPI = async () => {
    try {
      const resp = await leerProductosAPI();
      if (resp && resp.length > 0) {
        setProductos(resp);
      }
    } catch (error) {
      
      console.error(error);
    }
  };

  const filtrarProductosPorCategoria = () => {
    if (categoriaSeleccionada === "Todas") {
      return productos; 
    } else {
      return productos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      ); 
    }
  };

  return (
    <Container className="my-3">
      <h4 className="display-3 mb-3 text-center">Productos</h4>
<hr />
<Form.Group controlId="categoriaSelect">
            <Form.Label>Filtrar por categoría:</Form.Label>
            <Form.Control
            className='w-50'
              as="select"
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            </Form.Control>
          </Form.Group>
      <Row className='mt-4'>
        {filtrarProductosPorCategoria().map((producto) => (
          <CardProducto key={producto._id} producto={producto} />
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
