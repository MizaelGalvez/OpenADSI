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
      data: [1600, 2000, 3600, 4400, 5000, 6000, 6800, 7300, 8465],
      fill: false,
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

const Multiple = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [{
      label: 'Proyeccion',
      type:'line',
      data: [1600, 2000, 3600, 4400, 5000, 6000, 6800, 7300, 8465],
      fill: false,
      borderWidth: 5,
      borderColor: '#999999ee',
      backgroundColor: '#999999ee',
      pointBorderColor: '#999999ee',
      pointBackgroundColor: '#999999ff',
      pointHoverBackgroundColor: '#999999ff',
      pointHoverBorderColor: '#999999ff',
    },{
      type: 'bar',
      label: 'Utilidad',
      data: [1600, 2000, 3600, 4400, 5000, 6000],
      fill: false,
      backgroundColor: '#74b90aee',
      borderColor: '#74b90aff',
      hoverBackgroundColor: '#74b90aff',
      hoverBorderColor: '#74b90aff',
    },{
      type: 'bar',
      label: 'Comparacion',
      data: [175, 200, 352, 543, 684, 784, 978, 968, 1134, 1354, 1454, 1598],
      fill: false,
      backgroundColor: '#ff760eee',
      borderColor: '#ff760eee',
      hoverBackgroundColor: '#ff760eff',
      hoverBorderColor: '#ff760eff',
    }]
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
					<div className='Proyeccion'>

					<div className='Datos'>
							<b className='Gastos'>2000</b><p>Gastos</p><br/>
							<b className='Nomina'>6000</b><p>Nomina</p><br/>
							<b className='Utilidad'>7000</b><p>Utilidad</p><br/>

					</div>

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
