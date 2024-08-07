import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import bannerContacto from "../../assets/muestra.jpeg";

const Contacto = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "¡Consulta enviada!",
      text: "Gracias por contactarnos. Te responderemos pronto.",
    });
    reset();
  };

  return (
    <>
      <section>
        <div className="position-relative">
          <div className="tituloContacto">
            <h2 className=" display-1 tituloSeccion text-white text-center">
              Contactanos.
            </h2>
          </div>
          <img className="img-fluid w-100" src={bannerContacto} alt="" />
        </div>
      </section>
      <section>
        <Row className="my-5 ">
          <Col md={6} className="d-flex justify-content-center p-5 ">
            <div class="form-container shadow">
              <div class="logo-container">Consulta</div>
              <Form onSubmit={handleSubmit(onSubmit)} className="form ">
                <Form.Group controlId="formName" className="mb-2 form-group">
                  <Form.Label>Nombre completo*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("name", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "El nombre de usuario no puede tener más de 20 caracteres",
                      },
                    })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-2 form-group">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    {...register("email", {
                      required: "El correo electrónico es obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                        message: "El correo electrónico ingresado no es válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formselect" className="mb-2 form-group">
                  <Form.Label>Deseo contactar con el área de *</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    {...register("area", { required: true })}
                  >
                    <option value="">-- Selecciona una opcion --</option>
                    <option value="Ventas">Ventas web</option>
                    <option value="Restaurantes">Restaurantes</option>
                    <option value="Recursos humanos">Recursos humanos</option>
                    <option value="Relaciones públicas">
                      Relaciones públicas
                    </option>
                    <option value="Dirección">Dirección</option>
                    <option value="Facturacion">Facturacion</option>
                  </Form.Select>
                  {errors.area && (
                    <span className="text-danger">Este campo es requerido</span>
                  )}
                </Form.Group>

                <Form.Group
                  controlId="formConsulta"
                  className="mb-2 form-group"
                >
                  <Form.Label>Comentarios*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingresa tu consulta"
                    {...register("consulta", {
                      required: "La consulta es obligatoria",
                      minLength: {
                        value: 5,
                        message: "La consulta debe tener al menos 5 caracteres",
                      },
                      maxLength: {
                        value: 500,
                        message:
                          "La consulta no puede tener más de 500 caracteres",
                      },
                    })}
                  />
                  {errors.consulta && (
                    <p style={{ color: "red" }}>{errors.consulta.message}</p>
                  )}
                </Form.Group>

                <Form.Group controlId="formConsulta" className="mb-2 ">
                  <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    {...register("politica", {
                      required: "Debe aceptar politicas de privacidad",
                    })}
                    label={
                      <>
                        He leído y acepto la{" "}
                        <span
                          className="privacy-link text-decoration-underline"
                          onClick={handleShow}
                        >
                          política de privacidad
                        </span>
                      </>
                    }
                  />
                  {errors.politica && (
                    <p style={{ color: "red" }}>{errors.politica.message}</p>
                  )}
                </Form.Group>

                <button class="form-submit-btn" type="submit">
                  Enviar
                </button>
              </Form>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center p-5">
            <div className="contact-container text-center">
              <div className="opcionesContacto">
                <h4 className=""><i class="bi bi-envelope-at-fill"></i> Email</h4>
                <p>cafeteria@gmail.com</p>
              </div>

              <div className="opcionesContacto">
                <h4 className=""><i class="bi bi-telephone-forward-fill"></i> Llamada</h4>
                <p>(+54) 11-1234567</p>
              </div>
              <div className="opcionesContacto">
                <h4 className=""><i class="bi bi-geo-alt-fill"></i> Direccion</h4>
                <p>Calle 500</p>
              </div>
            </div>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Política de privacidad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>PROTECCIÓN DE DATOS</h3>
            <p>
              En Rolling Coffee valoramos la privacidad de nuestros clientes y
              nos esforzamos al máximo por mantenerla, es por ello que:
            </p>
            <p>
              1. No recolectamos información personal sin expreso
              consentimiento.
            </p>
            <p>
              2. Dicha información se mantiene archivada para el uso exclusivo
              de la administración de este sitio web y no es utilizada con
              ningún otro propósito.
            </p>
            <p>
              3. Sólo agregamos a nuestras listas de email a las personas que
              nos han dado su consentimiento.
            </p>
            <p>
              4. La lista de email se mantendrá en estricta confidencialidad. No
              son (y nunca serán) vendidas, rentadas o compartidas con nadie.
            </p>
            <p>
              5. Para remover de nuestra lista a un cliente, basta hacer clic en
              el link que aparece al final de cada email que reciba de nosotros.
            </p>
            <p>
              6. Para dar definitivamente de baja a un cliente de pendulo.com es
              necesario que ingrese a su cuenta, dar clic en DAR DE BAJA y
              seleccionar la opción DESEO DARME DE BAJA COMO CLIENTE, por último
              dar clic en aceptar.{" "}
            </p>
            <p>
              7. Cuando se adquiera un producto a través de nuestra web, los
              datos facilitados en el apartado “datos de envío”, se utilizarán
              para llevar a cabo la tramitación y gestión de la venta.
            </p>
            <p>
              8. La información que nos proporcionen en el formulario de
              registro “mi cuenta” será utilizada para la gestión de clientes y
              usuarios que utilicen nuestros servicios a través de la página
              web.
            </p>
            <p>
              9. Los datos personales de nuestros clientes serán comunicados a
              terceros cuando resulte necesario para formalizar y gestionar el
              pago de los productos o servicios adquiridos (PayPal, entidades
              bancarias, Mercado Pago o mensajerías).
            </p>
            <p>
              10. Los datos personales contenida en la documentación presentada
              en el momento de retirar los pedidos adquiridos mediante el
              servicio de entrega pick up son y servirán como respaldo de la
              entrega del servicio, nunca será utilizada para otros fines.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default Contacto;
