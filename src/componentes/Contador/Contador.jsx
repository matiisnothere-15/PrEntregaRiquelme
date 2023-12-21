// Cambiando la importación del módulo CSS
import Estilos from "./Contador.module.css";
import { useState } from "react";

function Contador(propiedades) {
  // Utilizando la nueva variable 'Estilos'
  let [contador, setContador] = useState(propiedades.inicio);
  const sumar = () => {
    if (contador < propiedades.stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > propiedades.inicio) {
      setContador(contador - 1);
    }
  };

  return (
    <div className={Estilos.contenedor}>
      <div className={Estilos.contenedorBotones}>
        <button className={Estilos.boton} onClick={restar}>
          -
        </button>
        <h2 className={Estilos.contador}>{contador}</h2>
        <button className={Estilos.boton} onClick={sumar}>
          +
        </button>
      </div>
      <button
        className={Estilos.botonAgregar}
        onClick={() => propiedades.onAdd(contador)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Contador;
