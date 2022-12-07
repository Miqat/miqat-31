import { sveltekit } from '@sveltejs/kit/vite';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';
import Icons from 'unplugin-icons/vite';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('vite').UserConfig} */
const config = {
	resolve: {
		preserveSymlinks: false,
		build: {
			sourcemap: true
		},
	},
	ssr: {
		noExternal: Object.keys(pkg.dependencies || {})
	},
	server: {
		open: '/'
	},
	plugins: [
		Icons({
			compiler: 'svelte',
		}),
		/* Vitebook Fix: https://github.com/vitebook/vitebook/issues/89
		 *********************************************************************/
		!process.env.VITEBOOK && sveltekit(),
	],
};

if (process.env.NODE_ENV === "production") config.resolve.preserveSymlinks = true;

export default config;
