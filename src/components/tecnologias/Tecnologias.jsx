import React from "react";
import { Col, Container, Card, Row, Stack } from "react-bootstrap";
import "../tecnologias/tecnologias.css";
import reactIcon from "../../assets/img/icons/reactIcon.png"
import bootstrapIcon from "../../assets/img/icons/bootstrapIcon.png"
import cssIcon from "../../assets/img/icons/cssIcon.png"
import githubIcon from "../../assets/img/icons/githubIcon.png"
import gitIcon from "../../assets/img/icons/gitIcon.png"
import htmlIcon from "../../assets/img/icons/htmlIcon.png"
import jsIcon from "../../assets/img/icons/jsIcon.png"
import mongodbIcon from "../../assets/img/icons/MongodbIcon.png"
import nodejsIcon from "../../assets/img/icons/nodejsIcon.png"
import sqlIcon from "../../assets/img/icons/sqlIcon.png"
const Tecnologias = () => {
  return (
    <>
      <Container id="tecnologias" className="container1 p-2 ">
        <div className="container2 p-2 pb-3 ">
          <p className="textTecnologias text-center mb-4 mt-0">TECNOLOGÍAS</p>
          <Row className="justify-content-center" >
            <Col xs={6} md={3} xl={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">HTML</h5>
              <img src={htmlIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3} md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">CSS</h5>
              <img src={cssIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">BOOTSTRAP</h5>
              <img src={bootstrapIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">JAVASCRIPT</h5>
              <img src={jsIcon} alt=""  className="imagenIcon2"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">REACT</h5>
              <img src={reactIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">NODE JS</h5>
              <img src={nodejsIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
            </Col>
            <Col xs={6} xl={3}md={3}>
           
           <div>
             <Stack className="justify-content-center text-center stackIcon">
             <h5 className="nombreTecnologia">GIT</h5>
             <img src={gitIcon} alt=""  className="imagenIcon"/>
             </Stack>
  
           </div>
      
  

           </Col>
           <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">GITHUB</h5>
              <img src={githubIcon} alt=""  className="imagenIcon"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">MONGODB</h5>
              <img src={mongodbIcon} alt=""  className="imagenIcon2"/>
              </Stack>
   
            </div>
       
   

            </Col>
            <Col xs={6} xl={3}md={3}>
           
            <div>
              <Stack className="justify-content-center text-center stackIcon">
              <h5 className="nombreTecnologia">MS SQL </h5>
              <img src={sqlIcon} alt=""  className="imagenIcon3"/>
              </Stack>
   
            </div>
       
   

            </Col>

  
            
        
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Tecnologias;
