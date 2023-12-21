
import Estilos from "./CarritoDeCompras.module.css";
import Imagen from "./asset/carrito.png";

function CarritoDeCompras() {
  return (
    <div className={Estilos.contenedorCarritoDeCompra}>
      <img className={Estilos.imagenCarritoDeCompra} src={Imagen} alt="" />
      <p className={Estilos.carritoDeCompraCantidad}>0</p>
    </div>
  );
}

export default CarritoDeCompras;
