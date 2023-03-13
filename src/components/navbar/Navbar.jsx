import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../navbar/navbar.css";

const Navegador = () => {
  const [colorNav, setColorNav] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={colorNav ? "navbar navbar-bg" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="tituloNav">
          &lt;/ martina soria lanzi&gt;
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto"></Nav>
          <Nav className="">
            <Nav.Link href="#sobreMi">Sobre Mi</Nav.Link>
            <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
            <Nav.Link href="#proyectos">Mis Proyectos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegador;
