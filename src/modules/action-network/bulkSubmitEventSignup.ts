import { SignupFormData } from '../../pages/volunteer/SignupFormData';
import { CampaignEvent } from './CampaignEvent';
import { submitEventSignup } from './submitEventSignup';

export const bulkSubmitEventSignup = (events: CampaignEvent[], form: SignupFormData) => {
  return Promise.all(events.map(event => submitEventSignup(event.signupURL, form)));
};
