import React from "react";

const Event = (props) => {
  return (<div>
    <li>
      <p>{props.event.day}</p>
      <p>{props.event.title}</p>
      <p>{props.event.description}</p>
    </li>
  </div>);
}

export default Event;