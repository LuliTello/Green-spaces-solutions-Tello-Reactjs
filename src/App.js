
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  function greeting(){
    let greetingMensaje = "Saludos desde Green Spaces Solutions"
    return greetingMensaje
  }
  
  return (
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <Footer />
    </BrowserRouter>

  );
}

export default App;
