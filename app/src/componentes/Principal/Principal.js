import React, { Component } from 'react';
import './estilos.css';
import img1 from './src/Imagen1.PNG';
import img2 from './src/Imagen2.PNG';
import img3 from './src/Imagen3.PNG';


class Principal extends Component {
  render() {
    return (

      <div className='Principal' style={styles.navegacion}>
          <h4>Que es OpenADSI? es la herramienta perfecta para hacer crecer tu startup !!<br/>
          Toma decisiones, midiendo tus metricas favoritas</h4>
          <div className="formulario-DIV">
            <form className="formulario">
                <input type="text" required placeholder="Usuario"/>
                <input type="password" required placeholder="password"/>
                <input type="submit" value="Iniciar Sesion"/>
              <h4>Inicia Sesion para Continuar</h4>
            </form>
          </div>

          <img src={img1} alt="img"/>
          <img src={img2} alt="img"/>
          <img src={img3} alt="img"/>

      </div>


    )
  }
}

const styles = {
  navegacion: {
    fontSize: 14,
  },

}
export default Principal;
