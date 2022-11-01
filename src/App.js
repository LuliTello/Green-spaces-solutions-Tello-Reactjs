
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Navbar';



function App() {
  function greeting(){
    let greetingMensaje = "Saludos desde Green Spaces Solutions"
    return greetingMensaje
  }
  
  return (
    <div className="App"> 
      <Nabvar/>
      <ItemListContainer greetingMensaje={greeting()}/>
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
