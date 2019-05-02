import React, { Component } from 'react'

export default class Car extends Component {
  render() {
      const car = this.props.car_info;
    return (
      <div>
        <h2>{car.name}</h2>
        <h3>{car.subheading}</h3>
        <p>{car.weight} lbs | {car.HP} hp | {car.wheelbase} inch wheelbase| {car.torque} ft lbs </p>
        <p> Length: {car.length} in <br/> Width: {car.width} in  <br/> Height: {car.height} in</p>
        <ul>
            {car.facts.map((fact) =>
            <li>
                {fact}
            </li>    
            )}
        </ul>
      </div>
    )
  }
}
