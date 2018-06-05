import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './estilos4.css';



class Vista4 extends Component {
  render() {
    return (

      <div className='conten'>
          <Clock format={'HH:mm:ss'} ticking={true} className="reloj"/>
          <a className="relleno">relleno</a>
          <div>
            <div className="pic">foto</div>
            <div className="data">nombre del empleado</div>
            <div className="comp">complemento</div>
          </div>
      </div>

    )
  }
}

export default Vista4;
