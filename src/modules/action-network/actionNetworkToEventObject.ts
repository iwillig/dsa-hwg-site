import { ActionNetworkEvent } from './ActionNetworkEvent';
import { CampaignEvent } from './CampaignEvent';
import {log} from "util";

export const actionNetworkToEventObject = (data: ActionNetworkEvent, type: CampaignEvent['type']): CampaignEvent => {
  let location = ""

  if (data.location) {
    if (data.location.address_lines) {
      location = data.location.address_lines[0];
    } else {
      location = "Virtual Event"
    }
  }

  return {
    id: data.identifiers[0],
    browser_url: data.browser_url,
    description: data.description,
    name: data.title,
    date: data.start_date,
    status: data.status,
    location: location,
    signupURL: data._links['osdi:record_attendance_helper'].href,
    type,
    borough: data.location.locality,
  }
};
