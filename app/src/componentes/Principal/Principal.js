import React, { Component } from 'react';



class Principal extends Component {
  render() {
    return (

      <div className='Principal' style={styles.navegacion}>
          <h4>Que es OpenADSI? es la herramienta perfecta para hacer crecer tu startup !!, toma deciciones, midiendo tus metricas favoritas</h4>
          <div className="formulario-DIV">
            <form className="formulario">
              <div className="formulario-datos">
                <input type="text" required placeholder="Usuario"/>
                <input type="password" required placeholder="password"/>
                <input type="submit" value="Enviar"/>
              </div>
            </form>
            <h4>Inicia Sesion para Continuar</h4>
          </div>
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
