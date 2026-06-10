import { writable, derived } from 'svelte/store';
import { es } from './es.js';
import { en } from './en.js';

const translations = { es, en };

const storedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
const defaultLang = storedLang || 'es';

export const locale = writable(defaultLang);

export const t = derived(locale, ($locale) => translations[$locale] || translations.es);

export const setLocale = (lang) => {
	if (translations[lang]) {
		locale.set(lang);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('lang', lang);
		}
		if (typeof document !== 'undefined') {
			document.documentElement.lang = lang;
		}
	}
};

export const availableLocales = [
	{ code: 'es', label: 'ES', full: 'Español' },
	{ code: 'en', label: 'EN', full: 'English' }
];
