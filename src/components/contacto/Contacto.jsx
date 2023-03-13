import React,{useRef} from "react";
import "../contacto/contacto.css";
import { Button, Container, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser'

const Contacto = () => {
  const form=useRef("")

  const sendEmail=(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_fsiawbl', 'template_8vcj1zs', form.current, 'KsX1c61JvBFU31_lx')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <>
      <Container className="container">
        <div className="divTextContacto">

        ¿QUERES OFRECERME HACERME UNA OFERTA, DARME ALGÚN FEEDBACK O SIMPLEMENTE
        SALUDAR? PODES HACERLO ACÁ ABAJO 👇
        </div>
        <Container className="containerForm container ">

          <Form className="formContacto" ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formContacto">
              <Form.Label>Nombre</Form.Label>
              <Form.Control className="formControl" type="text"  maxLength={45} name="user_name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto"  >
              <Form.Label>Email</Form.Label>
              <Form.Control className="formControl" type="email" name="user_email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContacto" >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                className="formControl"
                name="message"
              />
            </Form.Group>

            <Button className="botonEnviar"  type="submit" value="Send">
              Enviar
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Contacto;
