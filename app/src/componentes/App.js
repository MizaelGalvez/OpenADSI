import React, { Component } from 'react';
import logo from './LogoADSI.png';
import './App.css';

import Principal from './Principal/Principal';
import Vista1 from './Vista1/Vista1';
import Vista2 from './Vista2/Vista2';
import Vista3 from './Vista3/Vista3';
import Vista4 from './Vista4/Vista4';
let Contenido = Principal;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        Titulo: 'Bienvenidos a OpenADSI'
    }
  }

  cambiarPrincipal = (event) => {
    Contenido = Principal;
    this.setState({
      Titulo: 'Bienvenidos a OpenADSI',
    })
  }
  cambiarVista1 = (event) => {
    Contenido = Vista1;
    this.setState({
      Titulo: 'Primer Vista',
    })
  }
  cambiarVista2 = (event) => {
    Contenido = Vista2;
    this.setState({
      Titulo: 'Segunda Vista',
    })
  }
  cambiarVista3 = (event) => {
    Contenido = Vista3;
    this.setState({
      Titulo: 'Tercer Vista',
    })
  }
  cambiarVista4 = (event) => {
    Contenido = Vista4;
    this.setState({
      Titulo: 'Cuarta Vista',
    })
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.state.Titulo}</h1>
            <p className="iniciarSesion">Iniciar Sesion</p>
          </header>
          <div className="Contenedor">
          {<Contenido/>}
          </div>
          <footer className="nav">
            <p className="botonNav" onClick={this.cambiarPrincipal}>Principal</p>
            <p className="botonNav" onClick={this.cambiarVista1}>Vista 1</p>
            <p className="botonNav" onClick={this.cambiarVista2}>Vista 2</p>
            <p className="botonNav" onClick={this.cambiarVista3}>Vista 3</p>
            <p className="botonNav" onClick={this.cambiarVista4}>Vista 4</p>
          </footer>
      </div>


    )

  }
}


export default App;
