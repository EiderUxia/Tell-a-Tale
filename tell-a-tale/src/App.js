import './App.css';
import PrimarySearchAppBar from './components/TopBar';
import Index from './pages/Index';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Favoritos from './pages/Favoritos';
import Ajustes from './pages/Ajustes';
import Comic from './pages/Comic'
import LeerComic from './pages/LeerComic'
import EditarComic from './pages/EditarComic'
import HistoriasSubidas from './pages/Perfil'
import Notificaciones from './pages/Notificaciones'
import CrearComic from './pages/CrearComic'
import SubirCapComic from './pages/CrearCapComic'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Router>
        <PrimarySearchAppBar>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/IniciarSesion" component={IniciarSesion} />
            <Route exact path="/Registrarse" component={Registrarse} />

            <Route exact path="/CrearComic" component={CrearComic}/>
            <Route exact path="/EditarComic" component={EditarComic}/>
            <Route exact path="/CrearCapComic" component={SubirCapComic}/>

            <Route exact path="/Perfil" component={HistoriasSubidas}/>
            <Route exact path="/Favoritos" component={Favoritos} />

            <Route exact path="/Comic" component={Comic}/>
            <Route exact path="/LeerComic" component={LeerComic}/>

            <Route exact path="/Ajustes" component={Ajustes}/>            

            <Route exact path="/Notificaciones" component={Notificaciones}/>
            
          </Switch>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
