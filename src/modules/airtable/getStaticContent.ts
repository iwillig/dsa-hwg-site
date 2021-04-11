import Airtable from 'airtable';

const staticBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_STATIC_BASE as string);

export const getPageContent = async (table: string) => {
    const pageContent = await staticBase(table).select({}).firstPage();
    return pageContent;
}