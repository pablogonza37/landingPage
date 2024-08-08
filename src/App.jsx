import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/common/Navegacion";
import Banner from "./components/pages/inicio/Banner";
import Destacados from "./components/pages/inicio/Destacados";
import Footer from "./components/common/Footer";
import Contacto from "./components/pages/Contacto";
import Productos from "./components/pages/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route
            exact
            path="/productos"
            element={<Productos></Productos>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
