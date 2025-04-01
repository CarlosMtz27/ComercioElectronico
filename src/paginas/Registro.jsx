import React from "react";
import BarraNavegacion from "../componentes/BarraNavegacion";
import "../css/registro.css"
import Footer from "../componentes/Footer";
function Registro(){
    return(
        <>
            <h1>Registro</h1>
            <BarraNavegacion/>
            <div>
                <form action="/" method="get" >
                    <label for="nombre">
                        Nombre: 
                    </label><br/>
                    <input type="text" name="Nombre" placeholder="Ingresa tu nombre" required/><br/>
                    <label for="apellido">
                        Apellido:
                    </label><br/>
                    <input type="text" name="Apellido" placeholder="Ingresa tu apellido" required/><br/>
                    <label for="email">
                        Correo electronico: 
                    </label><br/>
                    <input type="text" name="Correo:" placeholder="Ingresa tu correo electronico" required/><br/>
                    <label for="password">
                        Contraseña: 
                    </label><br/>
                    <input type="password" name="Contraseña" placeholder="Ingresa tu contraseña" required/><br/>
                    <label for="confirmar">
                        Confirmar contraseña: 
                    </label><br/>
                    <input type="password" name="Confirmar cotraseña" placeholder="Confirma tu contraseña" required/><br/><br/>
                    <button class="boton">Enviar</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}
export default Registro;