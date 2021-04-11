import { getI18nResource } from './getI18nResource'

export const getTranslations = async (namespaces: string[]) => {
  const data = await Promise.all(namespaces.map(async namespace => {
    const resource = await getI18nResource(namespace);

    return [
      { namespace, locale: 'en', data: resource.en }
      //ADD ME BACK WHEN TRANSLATION IS READY
      // { namespace, locale: 'es', data: resource.es },
    ]
  }));

  return data.flat();
}
