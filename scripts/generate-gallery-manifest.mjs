import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, '../static/projects');
const outFile = path.join(__dirname, '../src/lib/data/gallery-manifest.js');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg']);
const NUMBERED_IMAGE = /^\d{3}-.+\.(jpg|jpeg|png|gif|webp|avif|svg)$/i;

/** @returns {Record<string, string[]>} */
const scanProjects = () => {
	/** @type {Record<string, string[]>} */
	const manifest = {};

	if (!fs.existsSync(projectsDir)) return manifest;

	for (const entry of fs.readdirSync(projectsDir, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;

		const id = entry.name;
		const dir = path.join(projectsDir, id);

		const images = fs
			.readdirSync(dir)
			.filter((file) => NUMBERED_IMAGE.test(file))
			.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
			.map((file) => `/projects/${id}/${file}`);

		if (images.length > 0) manifest[id] = images;
	}

	return manifest;
};

const manifest = scanProjects();

const content = `// Auto-generated — do not edit manually
// Run: npm run gallery:sync
// Place images in static/projects/{project-id}/ as 001-name.jpg, 002-name.png, etc.

export const galleryManifest = ${JSON.stringify(manifest, null, '\t')};
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, content, 'utf8');

const total = Object.values(manifest).reduce((sum, imgs) => sum + imgs.length, 0);
console.log(`Gallery manifest: ${Object.keys(manifest).length} projects, ${total} images`);
