<script>
	import { t, locale, setLocale } from '$lib/i18n/index.js';
	import { theme, toggleTheme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const navLinks = $derived([
		{ href: '#about', label: $t.nav.about },
		{ href: '#stack', label: $t.nav.stack },
		{ href: '#projects', label: $t.nav.projects },
		{ href: '#experience', label: $t.nav.experience },
		{ href: '#architecture', label: $t.nav.architecture },
		{ href: '#contact', label: $t.nav.contact }
	]);

	const handleScroll = () => {
		scrolled = window.scrollY > 20;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const switchLang = () => {
		setLocale($locale === 'es' ? 'en' : 'es');
	};

	const closeMenu = () => {
		menuOpen = false;
	};

	const isDark = $derived($theme === 'dark');
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	class:scrolled
>
	<div class="section-container">
		<nav class="flex items-center justify-between h-16">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-2 group" onclick={closeMenu}>
				<div class="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/30 transition-all">
					<span class="font-mono text-indigo-400 text-sm font-bold">EA</span>
				</div>
				<span class="font-semibold text-sm hidden sm:block" style="color: var(--c-text-secondary);">
					<span class="text-indigo-400">exel</span>.dev
				</span>
			</a>

			<!-- Desktop nav -->
			<div class="hidden md:flex items-center gap-1">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="px-3 py-1.5 text-sm transition-colors rounded-md"
						style="color: var(--c-text-muted);"
						onmouseover={(e) => e.currentTarget.style.color = 'var(--c-text-primary)'}
						onfocus={(e) => e.currentTarget.style.color = 'var(--c-text-primary)'}
						onmouseout={(e) => e.currentTarget.style.color = 'var(--c-text-muted)'}
						onblur={(e) => e.currentTarget.style.color = 'var(--c-text-muted)'}
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Actions -->
			<div class="flex items-center gap-2">
				<!-- Theme toggle -->
				<button
					onclick={toggleTheme}
					class="theme-btn"
					aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					title={isDark ? 'Modo claro' : 'Modo oscuro'}
				>
					<span class="theme-btn__track" class:dark={isDark}>
						<span class="theme-btn__thumb" class:dark={isDark}>
							{#if isDark}
								<!-- Moon icon -->
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
								</svg>
							{:else}
								<!-- Sun icon -->
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<circle cx="12" cy="12" r="5"/>
									<line x1="12" y1="1" x2="12" y2="3"/>
									<line x1="12" y1="21" x2="12" y2="23"/>
									<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
									<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
									<line x1="1" y1="12" x2="3" y2="12"/>
									<line x1="21" y1="12" x2="23" y2="12"/>
									<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
									<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
								</svg>
							{/if}
						</span>
					</span>
				</button>

				<!-- Lang toggle -->
				<button
					onclick={switchLang}
					class="lang-btn"
					aria-label="Toggle language"
				>
					{$locale === 'es' ? 'EN' : 'ES'}
				</button>

				<!-- CTA (desktop) -->
				<a href="#contact" class="cta-btn hidden sm:flex items-center gap-1.5">
					{$t.hero.cta_contact}
				</a>

				<!-- Mobile menu toggle -->
				<button
					class="md:hidden p-2 rounded-lg transition-colors"
					style="color: var(--c-text-muted);"
					onclick={() => (menuOpen = !menuOpen)}
					aria-label="Toggle menu"
				>
					{#if menuOpen}
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M2 2L16 16M16 2L2 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
						</svg>
					{:else}
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path d="M2 5H16M2 9H16M2 13H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
						</svg>
					{/if}
				</button>
			</div>
		</nav>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="mobile-menu md:hidden border-t">
			<div class="section-container py-4 flex flex-col gap-1">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="px-3 py-2.5 text-sm rounded-lg transition-colors"
						style="color: var(--c-text-secondary);"
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>

<style>
	header {
		background: transparent;
	}

	header.scrolled {
		background: color-mix(in srgb, var(--c-bg) 88%, transparent);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid var(--c-border);
	}

	.mobile-menu {
		border-color: var(--c-border);
		background: color-mix(in srgb, var(--c-bg) 98%, transparent);
		backdrop-filter: blur(20px);
	}

	/* ── Theme toggle button ─────────────────────── */
	.theme-btn {
		display: flex;
		align-items: center;
		padding: 4px;
		border-radius: 9999px;
		cursor: pointer;
		transition: background 0.2s ease;
		background: transparent;
		border: none;
	}

	.theme-btn:hover .theme-btn__track {
		border-color: rgba(99, 102, 241, 0.4);
	}

	.theme-btn__track {
		position: relative;
		width: 44px;
		height: 24px;
		border-radius: 9999px;
		border: 1.5px solid var(--c-border-strong);
		background: var(--c-surface-2);
		transition: background 0.3s ease, border-color 0.3s ease;
	}

	.theme-btn__track.dark {
		background: rgba(99, 102, 241, 0.15);
		border-color: rgba(99, 102, 241, 0.3);
	}

	.theme-btn__thumb {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 16px;
		height: 16px;
		border-radius: 9999px;
		background: var(--c-text-faint);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease;
		color: white;
	}

	.theme-btn__thumb.dark {
		transform: translateX(20px);
		background: #6366f1;
	}

	/* ── Lang button ────────────────────────────── */
	.lang-btn {
		padding: 5px 10px;
		border-radius: 8px;
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.05em;
		border: 1.5px solid var(--c-border-strong);
		background: transparent;
		color: var(--c-text-muted);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.lang-btn:hover {
		color: var(--c-text-primary);
		border-color: rgba(99, 102, 241, 0.35);
		background: rgba(99, 102, 241, 0.07);
	}

	/* ── CTA button ─────────────────────────────── */
	.cta-btn {
		padding: 6px 14px;
		border-radius: 8px;
		font-size: 12px;
		font-weight: 600;
		background: rgba(99, 102, 241, 0.12);
		border: 1.5px solid rgba(99, 102, 241, 0.25);
		color: #6366f1;
		transition: all 0.2s ease;
		text-decoration: none;
	}

	:global(.dark) .cta-btn {
		color: #a5b4fc;
	}

	.cta-btn:hover {
		background: rgba(99, 102, 241, 0.2);
		border-color: rgba(99, 102, 241, 0.4);
	}
</style>
