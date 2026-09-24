<script>
	import { t } from '$lib/i18n/index.js';

	const year = new Date().getFullYear();

	const links = [
		{ href: 'https://www.linkedin.com/in/exel-avenda%C3%B1o-224577245', label: 'LinkedIn' },
		{ href: 'https://github.com/aexelm-github', label: 'GitHub', note: true },
		{ href: 'mailto:exel.avendano@gmail.com', label: 'Email' }
	];
</script>

<footer class="py-10 mt-20" style="border-top: 1px solid var(--c-border);">
	<div class="section-container">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
			<div class="flex items-center gap-2">
				<div class="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
					<span class="font-mono text-indigo-400 text-xs font-bold">EA</span>
				</div>
				<span class="text-sm" style="color: var(--c-text-muted);">
					<span class="font-medium" style="color: var(--c-text-secondary);">Exel Avendaño</span>
					— Senior Full Stack Engineer
				</span>
			</div>

			<div class="flex items-center gap-6">
				{#each links as link (link.label)}
					<a
						href={link.href}
						target={link.href.startsWith('http') ? '_blank' : undefined}
						rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						title={link.note ? $t.contact.github_note : undefined}
						class="footer-link text-sm transition-colors"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<p class="text-xs" style="color: var(--c-text-faint);">
				© {year} Exel Avendaño
			</p>
		</div>
	</div>
</footer>

<style>
	.footer-link {
		color: var(--c-text-faint);
		text-decoration: none;
	}
	.footer-link:hover {
		color: var(--c-text-secondary);
	}
</style>
