import React from "react";
import logo from "../img/mercadolibre.jpg"
import "../css/BarraNavegacion.css"
import BarraNavegacion from "../componentes/BarraNavegacion";
import Footer from "../componentes/Footer"
import Productos from "../componentes/Productos";
function Home(){
    return(
        <>
        <div>
            <h1 className="tituloHome">Comercio Electronico</h1>
            <BarraNavegacion/>
            <img src={logo} className='AppLogo' alt='Cartel de comercio electronico'></img>
            <div>
                <Productos/>
            </div>
        </div>
        <Footer/> 
        </> 
    );
}

export default Home;