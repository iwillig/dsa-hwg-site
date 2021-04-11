import { ActionNetworkEvent } from './ActionNetworkEvent';
import { CampaignEvent } from './CampaignEvent';

export const actionNetworkToEventObject = (data: ActionNetworkEvent, type: CampaignEvent['type']): CampaignEvent => ({
  id: data.identifiers[0],
  name: data.title,
  date: data.start_date,
  status: data.status,
  signupURL: data._links['osdi:record_attendance_helper'].href,
  type,
  borough: data.location.locality,
});
