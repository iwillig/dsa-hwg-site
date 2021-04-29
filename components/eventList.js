import React from "react";
import Event from "./event";

const EventsList = (props) => {

  return (<ul className = "mt-8 ">
    {props.events.map((x) => (
      <Event key={x.id} event={x}/>
    ))}
  </ul>);
}

export default EventsList;