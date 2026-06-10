import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, 'static/projects');
const manifestFile = path.join(__dirname, 'src/lib/data/gallery-manifest.js');

/** @returns {import('vite').Plugin} */
export const gallerySyncPlugin = () => {
	let debounceTimer;

	const sync = () => {
		execSync('node scripts/generate-gallery-manifest.mjs', {
			cwd: __dirname,
			stdio: 'inherit'
		});
	};

	const scheduleSync = (server) => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			sync();
			server?.ws.send({ type: 'full-reload' });
		}, 200);
	};

	return {
		name: 'gallery-sync',
		configureServer(server) {
			server.watcher.add(projectsDir);
			server.watcher.on('add', (file) => {
				if (file.includes('static\\projects') || file.includes('static/projects')) scheduleSync(server);
			});
			server.watcher.on('unlink', (file) => {
				if (file.includes('static\\projects') || file.includes('static/projects')) scheduleSync(server);
			});
			server.watcher.on('change', (file) => {
				if (file.includes('static\\projects') || file.includes('static/projects')) scheduleSync(server);
			});
		},
		handleHotUpdate({ file, server }) {
			if (
				file.includes('static\\projects') ||
				file.includes('static/projects') ||
				file === manifestFile
			) {
				if (!file.endsWith('gallery-manifest.js')) scheduleSync(server);
				return [];
			}
		}
	};
};
