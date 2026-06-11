import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		},
		alias: {
			$lib: 'src/lib',
			$i18n: 'src/lib/i18n'
		}
	}
};

export default config;
