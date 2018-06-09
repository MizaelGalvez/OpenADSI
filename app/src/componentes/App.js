import React, { Component } from 'react';
import logo from './LogoADSI.png';
import './App.css';

import Principal from './Principal/Principal';
import Vista1 from './Vista1/Vista1';
import Vista2 from './Vista2/Vista2';
import Vista3 from './Vista3/Vista3';
import Vista4 from './Vista4/Vista4';
import Vista5 from './Vista5/Vista5';
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
      Titulo: 'Estadisticas de Usuarios/Clientes',
    })
  }
  cambiarVista2 = (event) => {
    Contenido = Vista2;
    this.setState({
      Titulo: 'Desgloce y Captura de Gastos e Ingresos',
    })
  }
  cambiarVista3 = (event) => {
    Contenido = Vista3;
    this.setState({
      Titulo: 'Administracion de Empleados',
    })
  }
  cambiarVista4 = (event) => {
    Contenido = Vista4;
    this.setState({
      Titulo: 'Cuarta Vista',
    })
  }
  cambiarVista5 = (event) => {
    Contenido = Vista5;
    this.setState({
      Titulo: 'Agregar Empleados',
    })
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.state.Titulo}</h1>
            <p className="iniciarSesion" onClick={this.cambiarPrincipal}>Iniciar Sesion</p>
          </header>
          <div className="Contenedor">
          {<Contenido/>}
          </div>
          <footer className="nav">
            <p className="botonNav" onClick={this.cambiarPrincipal}><i class="fas fa-home"></i><p>Mi Startup</p></p>
            <p className="botonNav" onClick={this.cambiarVista1}><i class="fas fa-users"></i><p>Usuarios</p></p>
            <p className="botonNav" onClick={this.cambiarVista2}><i class="fas fa-chart-bar"></i><p>Datoss</p></p>
            <p className="botonNav" onClick={this.cambiarVista5}><i class="far fa-address-card"></i><p>Agregar</p></p>
            <p className="botonNav" onClick={this.cambiarVista3}><i class="far fa-calendar-alt"></i><p>Tareas</p></p>
            <p className="botonNav-end" onClick={this.cambiarVista4}><i class="fas fa-code"></i><p>integrar</p></p>
          </footer>
      </div>


    )

  }
}


export default App;
