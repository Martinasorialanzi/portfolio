import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../sobreMi/sobreMi.css"
import fotCv from "../../assets/img/fotCv.jpg"
import { Link } from 'react-router-dom'
import pdf from '../../assets/cv/CvMartinaSoriaLanzi.pdf'


const SobreMi = () => {
  return (
    <>
    <Container id="sobreMi" className='containerSobreMi'>
    <Row className='p-0'>
        <Col className='colFotCv m-0 p-0' xs={12} sm={12} md={12} xl={6}>
        <img src={fotCv} className="fotCv"></img>
        </Col>
        <Col className='colSobreMi '>
        <p>
        Hola, soy Martina Soria Lanzi, tengo 25 años. 
        <br/>
        En marzo del 2021 me recibí de la carrera de Ingenieria Industrial en la universidad del Norte Santo Tomas de Aquino. En Mayo de 2022 empecé el curso de FullStack en RollingCode School con el fin de adentrarme en el mundo de la programación.
        <br/>
        Actualmente sigo aprendiendo y adquiriendo nuevas habilidades mientras realizo distintos proyectos para poner en practica todo lo aprendido y seguir creciendo.
        <br/><br/>
        Podes conocer más acerca de mi carrera profesional acá abajo 👇

            <br/>
          <Link to={pdf} className="colSobreMi" target="_blank" rel="noopener noreferrer" download="CvMartinaSoriaLanzi.pdf">Descarga mi CV</Link>
            
        </p>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default SobreMi