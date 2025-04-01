import React from "react";
import BarraNavegacion from "../componentes/BarraNavegacion";
import "../css/BarraNavegacion.css"
import Footer from "../componentes/Footer";
function Login(){
    return(
        <>
            <h1>Login</h1>
            <BarraNavegacion />
            <div>
                <form action="/" method="post">
                <label for="correo">
                    Correo electronico: 
                </label><br/>
                <input type="text" name="Correo:" placeholder="Ingresa tu correo electronico" required/><br/>
                <label for="password">
                    Contraseña: 
                </label><br/>
                <input type="password" name="Contraseña" placeholder="Ingresa tu contraseña" required/><br/>
                <br/><br/>
                <button class="boton">Enviar</button>
            </form>
            </div>
            <Footer/>
        </>
        );
}
export default Login;