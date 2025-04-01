import './App.css';
import './componentes/BarraNavegacion'
import { BrowserRouter as Link } from "react-router-dom";
import Rutas from './componentes/Rutas';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
function App() {
  return (
    <Rutas>
      <div className="App"> 
        <nav>
          <ul>
            <Link to="/Home" class="list">
              Home
            </Link>
            <Link to="/Login" element={<Login/>} class="list">
              Login
            </Link>
            <Link to="/Registro" element={<Registro/>} class="list">
              Registro
            </Link>
          </ul>
        </nav>
      </div>
    </Rutas>
    
  );
}

export default App;
