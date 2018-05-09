import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './estilos.css';



class Vista3 extends Component {
  render() {
    return (

      <div className='centrar' style={styles.navegacion}>
          <div className="izquierda">
            <ul>
              <li className="listas">Gonzales Munguia Jose Antonio</li>
              <li className="listas">Galvez Alcaraz Alejando MIzael</li>
            </ul>
            <button type="button" className="boton_listas">Imprimir</button>
            <button type="button" className="boton_listas2">Pagar</button>
          </div>
          <div className="derecha">
            <div className="foto"></div>
            <div className="nombreEmp">nombre del empleado</div>
            <div className="calendario">
              <Calendar className="borrame"/>
            </div>
          </div>
          {/*<h3 className="borrame">para la seccion de Nomina</h3>*/}
      </div>

    )
  }
}

const styles = {
  navegacion: {
    fontSize: 14,
  },

}
export default Vista3;
