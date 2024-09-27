import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import App from './components/App';
import resources from './locales/index.js';

const init = async () => {
  const i18nextInstance = i18next.createInstance();
  await i18nextInstance
    .use(initReactI18next)
    .init({
      debug: false,
      resources,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

  return (
    <I18nextProvider i18n={i18nextInstance}>
      <App />
    </I18nextProvider>
  )
};

export default init;