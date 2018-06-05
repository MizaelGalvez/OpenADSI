import React, { Component } from 'react';
import './estilos.css';
import img1 from './src/Imagen1.png';
import img2 from './src/Imagen2.png';
import img3 from './src/Imagen3.png';


class Vista4 extends Component {
  render() {
    return (

      <div className='Vista4' style={styles.navegacion}>
          <div className="reloj">
            <div className="ImagenReloj">
              <img src={img1} alt="img"/>
            </div>
            <div className="ImagenStatus">
              <img src="" alt="img"/>
            </div>
          </div>
          <div className="informacion">
            <div className="ImagenFoto">
              <img src={img2} alt="img"/>
            </div>
            <form>
              <input type="text" required placeholder="Num Empleado"/>
              <input type="text" required placeholder="Nombre del empleado"/>
            </form>
            <div className="ImagenDedo">
              <img src={img3} alt="img"/>
            </div>
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
export default Vista4;
