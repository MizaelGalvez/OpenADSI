import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import './estilos.css';


const dataUtilidad = {
  labels: ['Sem 16', 'Sem 17', 'Sem 18', 'Sem 19', 'Sem 20', 'Sem 21', 'Sem 22'],
  datasets: [{
      type: 'bar',
      label: 'Ventas',
      data: [1600, 2000, 2600, 2400, 3000, 2800],
      fill: false,
      backgroundColor: '#74b90aee',
      borderColor: '#74b90aff',
      hoverBackgroundColor: '#74b90aff',
      hoverBorderColor: '#74b90aff',
    },{
      type: 'bar',
      label: 'Nomina',
      data: [978, 968, 1134, 1354, 1454, 1598],
      fill: false,
      backgroundColor: '#ff760eee',
      borderColor: '#ff760eee',
      hoverBackgroundColor: '#ff760eff',
      hoverBorderColor: '#ff760eff',
    },{
      type: 'bar',
      label: 'Gastos',
      data: [297, 296, 313, 434, 454, 598],
      fill: false,
      backgroundColor: '#dd0c6fee',
      borderColor: '#dd0c6fee',
      hoverBackgroundColor: '#dd0c6fff',
      hoverBorderColor: '#dd0c6fff',
    }]
};

const options = {
  scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        },
  gridLines: {
                offsetGridLines: true
            },
  legend: {
    display: true,
    position: 'bottom',
  },
  elements: {
    line: {
      fill: false
    }
  },
};



class Vista2 extends Component {
  render() {
    return (

      <div className='desglose'>

        <div className='Vista2'>
          <div className='Proyeccion'>
             <Bar
              data={dataUtilidad}
              options={options}
            />
          </div>
          <div className='Capturar'>
            <b className='Gastos'>Gastos</b><input type="text" required placeholder="ingresa gasto"/><p>Registrar</p><br/>
            <b className='Utilidad'>Ventas</b><input type="text" required placeholder="ingresa Venta"/><p>Registrar</p><br/>
          </div>
        </div>
        <div className='Rentabilidad'>
            <div>
              <p>Rentabilidad:</p>
            </div>
            <div className='Porcentaje'>
              <p>32%</p>
            </div>
        </div>


      </div>

    )
  }
}

export default Vista2;
