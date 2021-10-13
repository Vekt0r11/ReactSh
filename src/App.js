import Navbar from './components/Layout/Navbar.js';
/* import Grid from './components/Layout/Grid.js';
import Card from './components/Layout/Card.js';
import Alert from './components/Layout/Alert.js'; */
import Login from './components/Pages/Login.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home';
import Posts from './components/Pages/Posts';
import Users from './components/Pages/Users';
import Gift from './components/Pages/Gift';

function App() {

  /* const Saludar = (params) => {
      alert(`Hola ${params}`)
  }
  const verInput = (e) => {
    console.log(e.target.value)
  } */

  //Rutas de mi aplicacion para simular las rutas de una pagina web sin recargar toda la pagina
  const Routing = () => {
    return(
      <Switch>
        <Route exact path="/home"   component={Home} />
        <Route exact path="/posts"  component={Posts} />
        <Route exact path="/users"  component={Users} />
        <Route exact path="/login"  component={Login} />
        <Route exact path="/gift"  component={Gift} />
      </Switch>
    )
  }

  return (
    <Router>
      <Navbar/>
      <Routing />
    </Router>
  );

  {/* <div className="row mx-auto w-75">
        <div className="col">
          <button onClick={() => Saludar('Hernan')} className="w-50 btn btn-info">
          saludar
          </button>
        </div>      
      </div>
      <div>
        <input onChange={verInput}></input>
      </div> */}
}

export default App;