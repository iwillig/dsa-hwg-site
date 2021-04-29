import { ActionNetworkEvent } from './ActionNetworkEvent';
import { CampaignEvent } from './CampaignEvent';
import {log} from "util";

export const actionNetworkToEventObject = (data: ActionNetworkEvent, type: CampaignEvent['type']): CampaignEvent => {

  console.log(data);

  return {
    id: data.identifiers[0],
    description: data.description,
    name: data.title,
    date: data.start_date,
    status: data.status,
    signupURL: data._links['osdi:record_attendance_helper'].href,
    type,
    borough: data.location.locality,
  }
};
