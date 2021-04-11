import React from "react";

const Event = (props) => {
  return (<div className = " mb-10 border-t border-b-0 border-l-0 border-r-0 border-gray-200">
    <li className ="grid grid-col-2 grid-row-2 tablet:grid-cols-4 tablet:gap-6 mt-2">
      <p className ="font-bold text-subheader-mobile tablet:text-subheader">{props.event.day}</p>

      <div className = "text-body"><p>{props.event.time}</p><p>{props.event.location}</p></div>

      <div className = "col-span-2"><p className ="font-bold text-subheader-mobile  mt-6 tablet:mt-0 tablet:text-subheader ">{props.event.title}</p>
      <p className = "mt-2 text-body ">{props.event.description}</p></div>
    </li>
  </div>);
}

export default Event;