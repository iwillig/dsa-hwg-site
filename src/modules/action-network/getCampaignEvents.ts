import { ActionNetworkEvent } from './ActionNetworkEvent';
import { actionNetworkToEventObject } from './actionNetworkToEventObject';
import { CampaignEvent } from './CampaignEvent';
import { limit } from './limit-requests';
import { fetchWithTimeout } from './fetch-with-timeout';
import startOfDay from 'date-fns/startOfDay';

const BASE_URL = 'https://actionnetwork.org/api/v2';

interface Campaign {
  id: string;
  type: CampaignEvent['type'];
}
const NYHA_CAMPAIGN: Campaign = {
  id: process.env.NYHA_CAMPAIGN_ID || '',
  type: 'doorhanging',
};

const getEventsUrl = (id: string, page: number) =>
  `${BASE_URL}/events?page=${page}`;

const getEventsForCampaign = async (campaign: Campaign, page: number) => {
  const requestUrl = getEventsUrl(campaign.id, page);
  const response = await fetchWithTimeout(requestUrl, {
    timeout: 2000,
    headers: {
      'OSDI-API-Token': process.env.ACTION_NETWORK_API_KEY as string,
    },
  });

  const data = await response.json();
  const rawEvents: ActionNetworkEvent[] = data._embedded['osdi:events'];

  return {
    events: rawEvents.map(
      actionNetworkData => actionNetworkToEventObject(actionNetworkData, campaign.type)
    ),
    totalPages: data.total_pages
  };
}


const getFieldEvents = (page: number) =>
  getEventsForCampaign(NYHA_CAMPAIGN, page);

// Returns [2 .... totalPages - 1];
const getNextPageNumbers = (totalPages: number) =>
  Array
    .from(Array(totalPages - 1).keys())
    .map(i => i + 2);

export const getAllEvents = async (): Promise<CampaignEvent[]> => {
  const firstPages = await Promise.all([
    limit(() => getFieldEvents(1)),
  ]);

  // Fetch next pages if necessary.
  const [
    fieldEventsTotalPages
  ] = firstPages.map(c => c.totalPages);
  const [ fieldEventsNextPages] = await Promise.all([
    Promise.all(
      getNextPageNumbers(fieldEventsTotalPages).map(page =>
        limit(() => getFieldEvents(page))
      )
    )
  ]);

  const events: CampaignEvent[] = [
    ...firstPages.flatMap(c => c.events),
    ...fieldEventsNextPages.flatMap(c => c.events)
  ];

  const currentDate = new Date();

  //return events sorted chronologically from the start of the current day
  return events
    .filter(({ date }) => new Date(date) > startOfDay(currentDate))
    .filter(({ status }) => status !== 'cancelled')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
