import React, { useEffect, useState } from "react";
import Producto from "./Producto";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                // Hacer la petición GET a la API publica
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                console.log("Productos desde Dummy JSON:", data);
                setProductos(data.products); // "products" es la propiedad que contiene la lista de productos
            } catch (error) {
                console.error("Error al cargar los productos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <div>
            <h2 className="tituloProductos">Productos</h2>
            <div className="container">
                {productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        id={producto.id}
                        imagen={producto.images}
                        nombre={producto.title}
                        precio={producto.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Productos;
