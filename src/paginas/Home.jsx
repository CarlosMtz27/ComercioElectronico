import React from "react";
import logo from "../img/mercadolibre.jpg"
import "../css/BarraNavegacion.css"
import BarraNavegacion from "../componentes/BarraNavegacion";
function Home(){
    return(
        <div>
            <h1>Comercio Electronico</h1>
            <BarraNavegacion/>
            <img src={logo} className='AppLogo' alt='Cartel de comercio electronico'></img>
        </div>  
    );
}

export default Home;