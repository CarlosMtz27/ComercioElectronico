//jsx: extensión de JavaScript que permite escribir código similar a HTML dentro de un archivo JavaScript
import React from "react";
import "../css/BarraNavegacion.css"
import { Link } from "react-router-dom";
import {Nav } from 'react-bootstrap';
function BarraNavegacion(){

    return(
        <div className="App">
           <nav>
                <Nav.Link as = {Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as = {Link} to="/Login">
                    Login
                </Nav.Link>
                <Nav.Link as = {Link} to="/Registro">
                    Registro
                </Nav.Link>
		    </nav>
        </div>
    );
}

export default BarraNavegacion;