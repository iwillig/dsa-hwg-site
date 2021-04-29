export interface CampaignEvent {
  id: string;
  description: string;
  name: string;
  date: string;
  status: string;
  signupURL: string;
  borough: string;
  location?: string;
  type: 'phonebank' | 'doorhanging';
}
