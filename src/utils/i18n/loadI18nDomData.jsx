import viLocaleData from 'react-intl/locale-data/vi';
import { addLocaleData } from 'react-intl';

import localeDataMap from '../../data/i18n/locales/currentlySupportedLangs';

const loadI18nDomData = () => {
  try {
    const domDefinedData = JSON.parse(document.getElementById('SFE_i18n_data').innerHTML);
    const localeData = localeDataMap[domDefinedData.locale];
    addLocaleData(localeData);
    return domDefinedData;
  } catch (err) {
    // fail back to default english values if any errors
    addLocaleData(viLocaleData);
    return {
      locale: 'vi',
      messages: {},
    };
  }
};

export default loadI18nDomData;
