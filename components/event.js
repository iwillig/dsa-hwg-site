import React from "react";

const Event = (props) => {
  const description={__html:props.event.description}

  return (<div className = " mb-10 border-t border-b-0 border-l-0 border-r-0 border-gray-200">

    <li className ="grid grid-col-2 grid-row-2 tablet:grid-cols-4 tablet:gap-6 mt-2">

      <p className ="text-body">{props.event.date}</p>

      <div className = "text-body"><p>{props.event.borough}</p></div>

      <div className = "col-span-2">
        <a  href={props.event.signupURL}
            className ="font-bold text-subheader-mobile  cursor-pointer mt-6 tablet:mt-0 tablet:text-subheader ">
        {props.event.name}
        </a>
      <div dangerouslySetInnerHTML={description} className="mt-2 text-body ">
      </div>
      </div>
    </li>
  </div>);
}

export default Event;