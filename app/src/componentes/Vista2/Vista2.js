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

const options2 = {
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
          <div className='Proyeccion'>
             <Bar
              data={Multiple}
              options={options2}
            />
          </div>
          <div className='Proyeccion'>
            <b className='Gastos'>Gastos</b><input type="text" required placeholder="ingresa gasto"/><p>Registrar</p><br/>
            <b className='Utilidad'>Ventas</b><input type="text" required placeholder="ingresa Venta"/><p>Registrar</p><br/>
          </div>
          <div className='Proyeccion'>
            <b className='Gastos'>Gastos</b><input type="text" required placeholder="ingresa gasto"/><p>Registrar</p><br/>
            <b className='Utilidad'>Ventas</b><input type="text" required placeholder="ingresa Venta"/><p>Registrar</p><br/>
          </div>

        </div>


      </div>

    )
  }
}

export default Vista2;
