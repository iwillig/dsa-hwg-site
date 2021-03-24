import {Events} from "../data/displayData";
import React from "react";
import Event from "./event";

const EventsList = () => {
  return (<ul>
    {Events.map((x) => (
      <Event key={JSON.stringify(x)} event={x}/>
    ))}
  </ul>);
}

export default EventsList;