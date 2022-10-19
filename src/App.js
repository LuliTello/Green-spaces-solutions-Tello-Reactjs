//import logo from './logo.svg';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
          <div>
        <a className="navbar-brand m-0" href="./index.html">
        <img className="nabvar__logo" src={logo} alt="logonavbar"/>
        </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar_list">
                        <li className="nav-item">
                            <a className="nav-link" href="./index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactenos">Contáctenos</a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <form action="" id="form-ingreso" className="dropdown-menu">
                        <label for="nombreUsuario" className="nombreUsuario">Nombre Usuario</label>
                        <input className="nombreUsuario__input" type="text" id="nombreUsuario" name="nombre"/>
                        <label for="contraseñaUsuario" className="contraseñaUsuario">Contraseña</label>
                        <input className="contraseñaUsuario__input" type="password" id="contraseñaUsuario"
                            name="contraseña"/>
                        <button type="submit" className="btn__ingresar">Ingresar</button>
                    </form>
                    </div>
                    </nav>    
      
      </header>

      <body>
        contenido del body
      </body>
      <footer className="footer">
        <p className="footer__title">Green Spaces Solutions</p>
        <p className="footer__text">Copyright &copy; 2022. All rights reserved</p>
        <div className="footer__icons">
            <a href="https://es-la.facebook.com/" className="icon_facebook">Facebook
                <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" className="icon_instagram">Instagram
                <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/home" className="icon_linkedin">Linkedin
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
    </footer>
    </div>
  );
}

export default App;
