import React, {useState } from "react";
import "../css/tarjetasProductos.css"

function Producto({id, imagen, nombre, precio}){

    const [comprar, setComprar] = useState("");
    const handleComprar = (e) =>{
        setComprar("Gracias por su compra!");
    }

    return (
        <div className="tarjeta">
            <img src={imagen[0]} alt={nombre} />
            <h4>{nombre}</h4>
            <p>Precio: ${precio}</p>
            <div className="comprar">{comprar}</div>
            <button id="botonComprar" onClick={handleComprar}>Comprar</button>
        </div>
    );
}
export default Producto;