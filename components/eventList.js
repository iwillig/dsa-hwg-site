import {Events} from "../data/displayData";
import React from "react";
import Event from "./event";

const EventsList = (props) => {


  return (<ul className = "mt-8 ">
    {props.events.map((x) => (
      <Event 
      key={JSON.stringify(x)} event={x}/>
    ))}
  </ul>);
}

export default EventsList;