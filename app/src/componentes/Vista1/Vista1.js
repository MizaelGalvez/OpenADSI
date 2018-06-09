import React, { Component } from 'react';
import './estilos.css';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const DataNewUsers = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
      label: 'Proyeccion',
      type:'line',
      data: [15, 25, 29, 34, 40, 42, 46, 60, 80, 80, 95],
      fill: false,
      borderWidth: 5,
      borderColor: '#ff760eee',
      backgroundColor: '#ff760eee',
      pointBorderColor: '#ff760eee',
      pointBackgroundColor: '#ff760eee',
      pointHoverBackgroundColor: '#ff760eee',
      pointHoverBorderColor: '#ff760eee',
    }]
};

const DataUsersLost = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
      label: 'Proyeccion',
      type:'line',
      data: [-2, -5, -7, -8, -6, -7, -10, -11, -9, -13, -15],
      fill: false,
      borderWidth: 5,
      borderColor: '#dd0c6fee',
      backgroundColor: '#dd0c6fee',
      pointBorderColor: '#dd0c6fee',
      pointBackgroundColor: '#dd0c6fee',
      pointHoverBackgroundColor: '#dd0c6fee',
      pointHoverBorderColor: '#dd0c6fee',
    }]
};
const DataActiveUsers = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
      label: 'Proyeccion',
      type:'line',
      data: [13, 33, 55, 81, 115, 150, 186, 235, 306, 373, 453],
      fill: true,
      borderWidth: 5,
      borderColor: '#74b90aee',
      backgroundColor: '#74b90aee',
      pointBorderColor: '#74b90aee',
      pointBackgroundColor: '#74b90aee',
      pointHoverBackgroundColor: '#74b90aee',
      pointHoverBorderColor: '#74b90aee',
    }]
};

const options = {
  gridLines: {
                offsetGridLines: true
            },
  legend: {
    display: false,
  },
  elements: {
    line: {
      fill: false
    }
  },
};




class Vista1 extends Component {

  render() {
    return (
      <div>

        <div className='Vista1'>

          <div className='Proyeccion'>
             <Bar
              data={DataNewUsers}
              options={options}
            />
          </div>
					<div className='DatosUsuarios'>

							<b >Activos</b><p>86</p><br/>
							<b >Perdidos</b><p>-35</p><br/>
							<b >Porcentaje Retencion</b><p>87%</p><br/>

          </div>
					<div className='Proyeccion'>
             <Bar
              data={DataUsersLost}
              options={options}
            />
          </div>
					<div className='Proyeccion'>
             <Bar
              data={DataActiveUsers}
              options={options}
            />
					</div>
        </div>


      </div>
    )
  }
}

export default Vista1;
