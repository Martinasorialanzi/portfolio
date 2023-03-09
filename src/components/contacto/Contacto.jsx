import React from "react";
import "../contacto/contacto.css";
import { Button, Container, Form } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
      <Container className="container">
        <div className="divTextContacto">

        ¿QUERES OFRECERME HACERME UNA OFERTA, DARME ALGÚN FEEDBACK O SIMPLEMENTE
        SALUDAR? PODES HACERLO ACÁ ABAJO 👇
        </div>
        <Container className="containerForm container ">
          <Form className="formContacto">
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Nombre</Form.Label>
              <Form.Control className="formControl" type="text"  maxLength={45}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Email</Form.Label>
              <Form.Control className="formControl" type="email"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                className="formControl"
              />
            </Form.Group>

            <Button className="botonEnviar"  type="submit">
              Enviar
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Contacto;
