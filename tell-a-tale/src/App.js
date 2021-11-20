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
import EditarCapitulo from './pages/editarCapComic'
import Genero from './pages/Genero'
import AgregarModerador from './pages/AgregarModerador'
import HistoriasPendientesDeAprobar from './pages/HistoriasPendientesDeAprobar'
import HistoriaARevisar from './pages/HistoriaARevisar'
import ComicsConReporte from './pages/ComicsConReporte'
import ComicReportado from './pages/ComicReportado'
import ComentariosReportados from './pages/ComentariosReportados'
import ListaComicsEscondidos from './pages/ListaComicsEscondidos'
import ComicEscondido from './pages/ComicEscondido'


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
            <Route exact path="/Genero" component={Genero} />

            <Route exact path="/CrearComic" component={CrearComic}/>
            <Route exact path="/EditarComic" component={EditarComic}/>
            <Route exact path="/CrearCapComic" component={SubirCapComic}/>
            <Route exact path="/EditarCapitulo" component={EditarCapitulo}/>

            <Route exact path="/Perfil" component={HistoriasSubidas}/>
            <Route exact path="/Favoritos" component={Favoritos} />

            <Route exact path="/Comic" component={Comic}/>
            <Route exact path="/LeerComic" component={LeerComic}/>

            <Route exact path="/Ajustes" component={Ajustes}/>            

            <Route exact path="/AgregarModerador" component={AgregarModerador}/>
            <Route exact path="/HistoriasPendientesDeAprobar" component={HistoriasPendientesDeAprobar}/>
            <Route exact path="/HistoriaARevisar" component={HistoriaARevisar}/>

            <Route exact path="/ComicsConReporte" component={ComicsConReporte}/>
            <Route exact path="/ComicReportado" component={ComicReportado}/>
            <Route exact path="/ComentariosReportados" component={ComentariosReportados}/>
            <Route exact path="/ListaComicsEscondidos" component={ListaComicsEscondidos}/>
            <Route exact path="/ComicEscondido" component={ComicEscondido}/>


            <Route exact path="/Notificaciones" component={Notificaciones}/>
            
          </Switch>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
