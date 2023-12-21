import Clase from "./SideBar.module.css";
import Boton from "../Boton/Boton";
import BotonConEnlace from "../BotonConEnlace/BotonConEnlace";
function SideBar() {
  return (
    <>
      <nav className={Clase.contenedor}>
        <ul className={Clase.contenedorItems}>
          <li className={Clase.items}>
            <BotonConEnlace href="#" msj="Inicio" clase="botonSideBar" />
          </li>
          <li className={Clase.items}>
            <BotonConEnlace href="#" msj="Categoria" clase="botonSideBar" />
            <ul className={Clase.subMenu}>
              <li>
                <Boton greeting="Camisetas" />
              </li>
              <li>
                <Boton greeting="Pantalones" />
              </li>
              <li>
                <Boton greeting="Zapatillas" />
              </li>
            </ul>
          </li>
          <li className={Clase.items}>
            <BotonConEnlace href="#" msj="Mis Compras" clase="botonSideBar" />
          </li>
          <li className={Clase.items}>
            <BotonConEnlace href="#" msj="Ayuda" clase="botonSideBar" />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default SideBar;
