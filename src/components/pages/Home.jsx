import React from 'react'
import { Nav,Col ,Tab, Row } from 'react-bootstrap'
import Navegador from '../navbar/Navbar'
import "../home.css"
import Presentacion from '../presentacion/Presentacion'
import SobreMi from '../sobreMi/SobreMi'
import Tecnologias from '../tecnologias/Tecnologias'
import Proyectos from '../proyectos/Proyectos'

const Home = () => {
  return (
    <>
    <Navegador/>
<Presentacion/>
<SobreMi/>
<Tecnologias/>
<Proyectos/>
    </>
  )
}

export default Home