<script>
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { t, locale } from '$lib/i18n/index.js';
	import { initTheme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		initTheme();
		const saved = localStorage.getItem('lang');
		if (saved && (saved === 'es' || saved === 'en')) {
			locale.set(saved);
			document.documentElement.lang = saved;
		}
	});
</script>

<svelte:head>
	<title>{$t.hero.name} — {$t.hero.title}</title>
	<meta name="description" content="{$t.hero.description}" />
	<meta name="author" content="Exel Avendaño" />
	<meta property="og:title" content="{$t.hero.name} — {$t.hero.title}" />
	<meta property="og:description" content="{$t.hero.description}" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://exelavendano.dev" />
</svelte:head>

<!-- Decorative radial gradient backdrop -->
<div class="page-gradient" aria-hidden="true"></div>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	/* Decorative radial gradient — dark mode */
	.page-gradient {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 0;
		background-image:
			radial-gradient(ellipse at top, rgba(99, 102, 241, 0.22) 0%, transparent 55%),
			radial-gradient(ellipse at bottom, rgba(14, 165, 233, 0.12) 0%, transparent 50%);
		transition: background-image 0.4s ease;
	}

	/* Light mode — colores más sutiles */
	:global(html:not(.dark)) .page-gradient {
		background-image:
			radial-gradient(ellipse at top, rgba(99, 102, 241, 0.07) 0%, transparent 55%),
			radial-gradient(ellipse at bottom, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
	}

	/* position: relative sin z-index → no crea stacking context
	   así el modal interno puede superar al header globalmente */
	:global(main) {
		position: relative;
	}

	:global(footer) {
		position: relative;
	}
</style>
