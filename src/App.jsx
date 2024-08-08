import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/common/Navegacion'
import Banner from "./components/pages/inicio/Banner";
import Destacados from "./components/pages/inicio/Destacados";
import Footer from "./components/common/Footer";
import Contacto from "./components/pages/Contacto";
import Productos from "./components/pages/Productos";


function App() {

  return (
    <>
      <NavBar></NavBar>
      {/*<Banner></Banner>
      <Destacados></Destacados>
      <Contacto></Contacto>*/}
      <Productos></Productos>
      <Footer></Footer>
    </>
  )
}

export default App
