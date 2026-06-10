<script>
	import { base } from '$app/paths';
	import { t } from '$lib/i18n/index.js';
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			visible = true;
		});
	});
</script>

<section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
	<!-- Background: grid pattern -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute inset-0 animate-grid-fade" style="
			background-image:
				linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
				linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
			background-size: 60px 60px;
		"></div>
	</div>

	<!-- Background: glow orbs -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-glow-pulse"
			style="background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%); filter: blur(40px);">
		</div>
		<div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-glow-pulse animate-delay-300"
			style="background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%); filter: blur(40px);">
		</div>
	</div>

	<!-- Content -->
	<div class="section-container relative z-10 pt-24 pb-16">
		<div class="max-w-4xl">
			<!-- Available badge -->
			<div
				class="available-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(12px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
			>
				<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
				{$t.hero.available}
			</div>

			<!-- Greeting -->
			<p
				class="text-slate-400 text-lg mb-2 font-light transition-all duration-700 animate-delay-100"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(16px)'}; transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;"
			>
				{$t.hero.greeting}
			</p>

			<!-- Name -->
			<h1
				class="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;"
			>
				<span class="text-gradient">{$t.hero.name}</span>
			</h1>

			<!-- Title -->
			<div
				class="mb-6"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;"
			>
				<p class="text-2xl sm:text-3xl font-semibold text-slate-200">
					{$t.hero.title}
				</p>
				<p class="text-xl sm:text-2xl font-light text-indigo-400 mt-1">
					{$t.hero.subtitle}
				</p>
			</div>

			<!-- Description -->
			<p
				class="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(16px)'}; transition: opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s;"
			>
				{$t.hero.description}
			</p>

			<!-- CTAs -->
			<div
				class="flex flex-wrap gap-3 mb-16"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(16px)'}; transition: opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s;"
			>
				<a href="#projects" class="btn-primary">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
						<rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
						<rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
						<rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
					</svg>
					{$t.hero.cta_projects}
				</a>
				<a href="{base}/cv-exel-avendano.pdf" download class="btn-secondary">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M8 2v8M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					{$t.hero.cta_cv}
				</a>
				<a href="#contact" class="btn-secondary">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M2 4a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" stroke-width="1.5"/>
						<path d="M2 4l6 4 6-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
					</svg>
					{$t.hero.cta_contact}
				</a>
			</div>

			<!-- Stats row -->
			<div
				class="flex flex-wrap gap-8"
				style="opacity: {visible ? 1 : 0}; transition: opacity 0.7s ease 0.6s;"
			>
				<div class="flex flex-col">
					<span class="text-2xl font-bold text-slate-100">20+</span>
					<span class="text-xs text-slate-500 mt-0.5">{$t.hero.years_exp}</span>
				</div>
				<div class="w-px h-10 bg-white/10 self-center"></div>
				<div class="flex flex-col">
					<span class="text-2xl font-bold text-slate-100">30+</span>
					<span class="text-xs text-slate-500 mt-0.5">{$t.hero.enterprise}</span>
				</div>
				<div class="w-px h-10 bg-white/10 self-center"></div>
				<div class="flex flex-col">
					<span class="text-2xl font-bold text-indigo-400">Full Stack</span>
					<span class="text-xs text-slate-500 mt-0.5">{$t.hero.fullstack}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style="color: var(--c-text-faint);">
		<span class="text-xs tracking-widest uppercase">scroll</span>
		<div class="w-px h-10" style="background: linear-gradient(to bottom, var(--c-text-faint), transparent);"></div>
	</div>
</section>

<style>
	.available-badge {
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.22);
		color: #059669;
	}

	:global(.dark) .available-badge {
		color: #6ee7b7 !important;
		background: rgba(16, 185, 129, 0.1) !important;
		border-color: rgba(16, 185, 129, 0.2) !important;
	}
</style>
