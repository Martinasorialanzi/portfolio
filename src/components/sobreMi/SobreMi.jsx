import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../sobreMi/sobreMi.css"
import fotCv from "../../assets/img/fotCv.jpg"

const SobreMi = () => {
  return (
    <>
    <Container id="sobreMi" className='containerSobreMi'>
    <Row className='p-0'>
        <Col className='colFotCv m-0 p-0' xs={12} sm={12} md={6}>
        <img src={fotCv} className="fotCv"></img>
        </Col>
        <Col className='colSobreMi '>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto illo veritatis ratione cumque doloremque at in nostrum a deserunt, accusamus repudiandae animi reprehenderit reiciendis maxime repellendus unde cum delectus.
            <br/><br/><br/> PONER BOTON CV
        </p>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default SobreMi