import React from "react";

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        <li>{props.animal}</li>
        <li>{props.breed}</li>
      </ul>
    </div>
  )
}

export default Pet;