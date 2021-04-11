import { getPageContent } from './getStaticContent';

export const getI18nResource = async (namespace: string) => {
  const response = await getPageContent(namespace);

  const res = response
    .map((record) => !!Object.keys(record.fields).length && record.fields)
    .filter(item => !!item)

  const en = {}
  //ADD ME BACK WHEN TRANSLATION IS READY 
  // const es = {}

  res.map((record) => {
    en[record.key] = record.en || ''
    //ADD ME BACK WHEN TRANSLATION IS READY 
    // es[record.key] = record.es || ''
  })

  return {
    en
    //ADD ME BACK WHEN TRANSLATION IS READY 
    // es,
  };
}
