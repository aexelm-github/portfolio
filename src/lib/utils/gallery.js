import { base } from '$app/paths';
import { galleryManifest } from '$lib/data/gallery-manifest.js';

/** @param {string} path */
const withBase = (path) => `${base}${path}`;

/** @param {string} projectId */
export const getProjectImages = (projectId) =>
	(galleryManifest[projectId] ?? []).map(withBase);

/** @param {string} projectId */
export const hasProjectImages = (projectId) => getProjectImages(projectId).length > 0;

/** @param {string} id */
export const galleryPlaceholder = (id) => {
	const colors = {
		grupoenercas: ['#0ea5e9', '#0369a1'],
		simplify2: ['#06b6d4', '#0e7490'],
		'alumbrado-web': ['#6366f1', '#4f46e5'],
		'alumbrado-mobile': ['#10b981', '#059669'],
		'alumbrado-gps': ['#14b8a6', '#0d9488'],
		'centro-control': ['#6366f1', '#818cf8'],
		'cartera-alumbrado': ['#f59e0b', '#d97706'],
		appencuesta: ['#8b5cf6', '#7c3aed'],
		'appencuesta-mobile': ['#ec4899', '#db2777'],
		votasoft: ['#10b981', '#047857'],
		domicilios: ['#f97316', '#ea580c'],
		'cartas-pdf': ['#64748b', '#475569'],
		chatia: ['#a855f7', '#9333ea'],
		songuiando: ['#f43f5e', '#be123c']
	};

	const [c1, c2] = colors[id] || ['#6366f1', '#4f46e5'];

	return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='240' viewBox='0 0 400 240'%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='${encodeURIComponent(c1)}' stop-opacity='0.15'/%3E%3Cstop offset='1' stop-color='${encodeURIComponent(c2)}' stop-opacity='0.05'/%3E%3C/linearGradient%3E%3Crect width='400' height='240' fill='url(%23g)'/%3E%3Ctext x='200' y='120' text-anchor='middle' fill='${encodeURIComponent(c1)}' font-family='monospace' font-size='12' opacity='0.45'%3E001-capture.jpg%3C/text%3E%3C/svg%3E`;
};
