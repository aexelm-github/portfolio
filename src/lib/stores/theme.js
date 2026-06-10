import { writable } from 'svelte/store';

export const theme = writable('dark');

const applyTheme = (value) => {
	if (typeof document === 'undefined') return;
	if (value === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
	document.documentElement.setAttribute('data-theme', value);
};

export const initTheme = () => {
	const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
	const prefersDark =
		typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const initial = saved || (prefersDark ? 'dark' : 'light');
	theme.set(initial);
	applyTheme(initial);
};

export const toggleTheme = () => {
	theme.update((current) => {
		const next = current === 'dark' ? 'light' : 'dark';
		applyTheme(next);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('theme', next);
		}
		return next;
	});
};
