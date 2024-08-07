import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/common/Navegacion'
import Banner from "./components/pages/inicio/Banner";
import Destacados from "./components/pages/inicio/Destacados";
import Footer from "./components/common/Footer";


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Destacados></Destacados>
      <Footer></Footer>
    </>
  )
}

export default App
