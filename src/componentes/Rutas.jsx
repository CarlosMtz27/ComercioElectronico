import React from "react";
import Home from "../paginas/Home";
import Registro from "../paginas/Registro";
import Login from "../paginas/Login";
import {Routes, Route} from "react-router-dom";//Importamos las rutas para la funcionabilidad
function Rutas(){
    //Creamos las rutas para la navegacion de la cabecera
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
        </Routes>

    );
}
export default Rutas;