import React, { Component } from 'react';
import * as timeline from '../data/timeline.json';
import Car from "./Car"
export default class DisplayEvo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       cars: timeline.evolution
    }
  }
  
  render() {
    return (
      <div>
        {this.state.cars.map((car) =>
          <Car car_info={car} />
        )}
      </div>
    )
  }
}
