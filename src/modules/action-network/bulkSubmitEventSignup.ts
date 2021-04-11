
import { CampaignEvent } from './CampaignEvent';
import { submitEventSignup } from './submitEventSignup';

export const bulkSubmitEventSignup = (events: CampaignEvent[], form: any) => {
  return Promise.all(events.map(event => submitEventSignup(event.signupURL, form)));
};
