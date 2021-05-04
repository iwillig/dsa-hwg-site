import React from "react";
import EventsList from "./eventList";
import { CampaignEvent } from '../src/modules/action-network/CampaignEvent';
import {getAllEvents} from "../src/modules/action-network/getCampaignEvents";



const UpComingEvents = (props) => {
  return (
    <div className ="border-0  border-t  border-black border-solid ">
      <div className = "mx-8  desktop:mx-64">
      <h2 className = " mt-4 text-header-mobile tablet:text-header font-bold">
        Upcoming Events
      </h2>
      
      <div className = ""> 
      <EventsList events={props.events}/>
      </div>
      </div>
    </div>
  );
};

export default UpComingEvents;

