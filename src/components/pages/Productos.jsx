import React, { useEffect, useState } from "react";
import { Form, Container, Row, Modal, Button } from "react-bootstrap";
import { leerProductosAPI, obtenerProductoAPI } from "../../helpers/queries";
import CardProducto from "./CardProducto";
import Swal from "sweetalert2";
import bannerProductos from "../../assets/productos.jpeg";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [show, setShow] = useState(false);
  const [productoModal, setProductoModal] = useState({});
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    consultarAPI();
    filtrarProductosPorCategoria();
  }, [categoriaSeleccionada]);

  const handleClose = () => setShow(false);

  const obtenerIdProducto = async (id) => {
    try {
      const respuesta = await obtenerProductoAPI(id);
      const productoEncontrado = await respuesta.json();
      setProductoModal(productoEncontrado);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

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

  const agregarAlCarrito = async () => {
    Swal.fire({
      title: "Pedido realizado",
      text: `El pedido de ${cantidad} "${productoModal.nombreProducto}" fue realizado correctamente`,
      icon: "success",
    });
    setShow(false);
    setCantidad(1);
  };

  return (
    <>
    <section className='mainSection'>
        <div className="position-relative">
          <div className="tituloContacto">
            <h2 className=" display-1 tituloSeccion text-white text-center">
              Productos
            </h2>
          </div>
          <img className="img-fluid w-100" src={bannerProductos} alt="banner productos" />
        </div>
      </section>
    <Container className="my-3 mainSection">
      <Form.Group controlId="categoriaSelect">
        <Form.Label>Filtrar por categoría:</Form.Label>
        <Form.Control
          className="w-50"
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
      <Row className="mt-4">
        {filtrarProductosPorCategoria().map((producto) => (
          <CardProducto
            key={producto._id}
            producto={producto}
            obtenerIdProducto={obtenerIdProducto}
          />
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>{productoModal.nombreProducto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src={productoModal.imagen} alt="" />
          <p>{productoModal.descripcionAmplia}</p>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
            className="form-control mb-1 selectCantidad"
            style={{
              width: "60px",
              display: "inline-block",
              marginRight: "5px",
            }}
          />
          <Button variant="dark" onClick={agregarAlCarrito}>
            Agregar al carrito
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
};

export default Productos;
