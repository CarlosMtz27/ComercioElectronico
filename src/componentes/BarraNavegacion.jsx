//jsx: extensión de JavaScript que permite escribir código similar a HTML dentro de un archivo JavaScript
import React from "react";
import "./BarraNavegacion.css"
function BarraNavegacion(){

    return(
        <div>
           <nav>
                <ul>
				    <li><a href="index.html">Home</a></li>
				    <li><a href="registro.html">Registro</a></li>
				    <li><a href="login.html">Login</a></li>
			    </ul>
		    </nav>
        </div>
    );
}

export default BarraNavegacion;