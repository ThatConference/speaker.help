import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: resolve('./src/components'),
			$dataSources: resolve('./src/dataSources'),
			$thatApi: resolve('./src/dataSources/api.that.tech')
		},
		version: {
			name: process.env?.npm_package_version || '0.0.0'
		}
	}
};

export default config;
