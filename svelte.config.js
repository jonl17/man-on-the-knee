import { vitePreprocess } from '@sveltejs/kit/vite'
import netlifyAdapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: netlifyAdapter(),
		alias: {
			'@/*': './src/*'
		}
	}
}

export default config
