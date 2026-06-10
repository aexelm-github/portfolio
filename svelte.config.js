import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$i18n: 'src/lib/i18n'
		}
	}
};

export default config;
