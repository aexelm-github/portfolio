import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { gallerySyncPlugin } from './vite-plugin-gallery-sync.js';

export default defineConfig({
	plugins: [gallerySyncPlugin(), sveltekit()]
});
