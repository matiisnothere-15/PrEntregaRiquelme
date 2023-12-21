import React, { useState } from "react";
import Clase from "./App.module.css";
import NavBar from "./componentes/NavBar/NavBar";
import SideBar from "./componentes/SideBar/SideBar";
import ItemsListContainer from "./componentes/ItemsListContainer/ItemsListContainer";
import Contador from "./componentes/Contador/Contador";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <section className={Clase.seccionPrincipal}>
      {sidebarVisible && <SideBar />}
      <div className={Clase.contenedorPrincipal}>
        <NavBar toggleSidebar={toggleSidebar} />
        <ItemsListContainer greeting={"Hola, Bienvenido"} />
        <div className={Clase.contenedorProductos}>
          <Contador inicio={1} stock={15} onAdd={(valor) => console.log(valor)} />
        </div>
      </div>
    </section>
  );
}

export default App;
