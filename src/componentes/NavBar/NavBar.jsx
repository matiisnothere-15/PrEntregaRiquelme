import React from "react";
import CarritoDeCompras from "../CardWidget/CarritoDeCompras";
import Boton from "../BotonConEnlace/BotonConEnlace";
import Clase from "./NavBar.module.css";

function NavBar({ toggleSidebar }) {
  return (
    <nav className={Clase.contenedorNavBar}>
      <button className={Clase.menuButton} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={Clase.nombreTienda}>GAMAX</div>
      <img src="" alt="" />
      <CarritoDeCompras />
      <Boton msj="Iniciar Sesion" clase="boton" />
    </nav>
  );
}

export default NavBar;
