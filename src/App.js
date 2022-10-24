
import './App.css';
import Footer from './components/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
