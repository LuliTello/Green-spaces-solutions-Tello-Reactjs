
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartContext from './components/CartContext';
import Checkout from './components/Checkout';


function App() {
    
  return (
    <CartContext>
    <BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
      <Navbar />
      {/* ACA DECLARO RUTAS PUNTUALES */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path= "/category/:idcategory" element={<ItemListContainer />} />
        <Route path= "/item/:iditem" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS ABAJO DE TODO*/}
      <Footer />
    </BrowserRouter>
   </CartContext>
  );
}

export default App;
