import React, { Component } from 'react';



class Vista1 extends Component {
  render() {
    return (

      <div className='Vista1' style={styles.navegacion}>
          <h3>Contenido Diferente</h3>
      </div>

    )
  }
}

const styles = {
  navegacion: {
    fontSize: 14,
  },

}
export default Vista1;
