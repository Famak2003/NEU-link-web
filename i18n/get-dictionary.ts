import 'server-only';
import type { Locale } from './config';
import enTranslations from '@/locales/en.json';

type Translations = typeof enTranslations;

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default as Translations),
  tr: () => import('@/locales/tr.json').then((module) => module.default as Translations),
};

export const getDictionary = async (locale: Locale): Promise<Translations> =>
  dictionaries[locale]();