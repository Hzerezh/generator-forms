import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome'
  },
  ru: {
    welcome: 'Добро пожаловать'
  }
};

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages,
});

export default i18n;