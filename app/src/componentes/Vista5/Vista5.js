import React, { Component } from 'react';
import './estilos.css';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';


class Vista5 extends Component {

  render() {
    return (
      <div>

        <div className='Vista5'>

        <div className='formularioAgregar'>
          <div className='Agregar'>

            <form>
              <b className='verde'>Nombre</b><input type="text" required placeholder=""/><br/>
              <b className='verde'>Direccion</b><input type="text" required placeholder=""/><br/>
              <b className='verde'>Sexo</b><input type="text" required placeholder=""/><br/>
              <b className='verde'>Puesto</b><input type="text" required placeholder=""/><br/>
              <b className='verde'>Sueldo</b><input type="text" required placeholder=""/><br/>
              <input className='boton' type="submit" value="Registrar"/>
            </form>

          </div>
          <div className='Efectivos'>
                <b className='Emp'>Empleados</b><p>18</p><br/>
                <b className='Adm'>Administrativos</b><p>3</p><br/>
          </div>
        </div>

        </div>


      </div>
    )
  }
}

export default Vista5;
