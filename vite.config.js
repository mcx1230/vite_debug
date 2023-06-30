import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import { resolve } from 'path'
import events from 'events'
import virtualHtmlTemplate from 'vite-plugin-virtual-html-template'

events.EventEmitter.defaultMaxListeners = 0;

const pageOptions = {
	pages: {
		index: {
			template: 'public/index.html',
			title: 'Home Page',
			entry: 'src/index.js'
		},
		home: {
			template: 'public/index.html',
			title: 'Home Page',
			entry: 'src/index.js'
		},
		about: {
			template: 'public/screen.html',
			title: 'About Page',
			entry: 'src/screen.js'
		}
	},
}

export default defineConfig(({ command, mode }) => {

	return {
		root: mode === 'development' ? './src' : '',
		publicDir: 'public',

		server: {
			port: 8090,
			strictPort: false,
		},
		build: {
			target: 'esnext',
			outDir: resolve(__dirname, 'dist'),
			cssCodeSplit: true,
			rollupOptions: {
				input: {
					main: resolve(__dirname, '/index.html'),
					index: resolve(__dirname, '/index.html'),
					about: resolve(__dirname, '/screen.html'),
				},
			},

		},
		plugins: [
			vue2(),
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime']
			}),
			virtualHtmlTemplate(pageOptions),
			/*https://blog.csdn.net/JokerSoulClub/article/details/128485767*/
			/*https://www.npmjs.com/package/vite-plugin-virtual-html-template*/
		],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			}
		},
	}
})