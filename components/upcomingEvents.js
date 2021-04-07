import React from "react";
import EventsList from "./eventList";

const UpComingEvents = () => {
  return (
    <div className ="border-0 border-t  border-black border-solid ">
      <h2 className = "ml-8 mt-4 text-header-mobile tablet:text-header font-bold">
        Upcoming Events
      </h2>
      
      <div> 
      <EventsList/>
      </div>

    </div>
  );
};

export default UpComingEvents;