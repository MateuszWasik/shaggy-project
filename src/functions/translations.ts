import * as enMessages from '../translations/en.json';
import * as plMessages from '../translations/pl.json';

export type TranslationKey = keyof typeof enMessages;

export function getTranslation(locale: string, key: TranslationKey) {
	return locale === 'pl' ? plMessages[key] : enMessages[key];
}
