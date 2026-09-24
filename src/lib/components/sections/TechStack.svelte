<script>
	import { t } from '$lib/i18n/index.js';
	import { techStack } from '$lib/data/tech.js';
	import { techIcons } from '$lib/data/tech-icons.js';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import { onMount } from 'svelte';

	let el = $state(null);
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.1 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});

	const categoryKeys = ['frontend', 'backend', 'mobile', 'databases', 'infrastructure', 'ai'];

	const categoryColors = {
		frontend:       { dot: '#6366f1', bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.15)'  },
		backend:        { dot: '#10b981', bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.15)'  },
		mobile:         { dot: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.15)'  },
		databases:      { dot: '#ef4444', bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.15)'   },
		infrastructure: { dot: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.15)'   },
		ai:             { dot: '#a855f7', bg: 'rgba(168,85,247,0.08)',  border: 'rgba(168,85,247,0.18)'  }
	};
</script>

<section id="stack" class="py-24 lg:py-32 relative" bind:this={el}>
	<div class="section-container">
		<div class="text-center max-w-2xl mx-auto mb-16"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
		>
			<SectionLabel>{$t.stack.label}</SectionLabel>
			<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">{$t.stack.title}</h2>
			<p class="text-slate-400">{$t.stack.subtitle}</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each categoryKeys as key, i (key)}
				{@const color = categoryColors[key]}
				{@const isAi = key === 'ai'}
				<div
					class="rounded-2xl p-6 glass glass-hover"
					class:ai-card={isAi}
					style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(24px)'}; transition: opacity 0.6s ease {i * 80}ms, transform 0.6s ease {i * 80}ms; {isAi ? `border-color: rgba(168,85,247,0.25);` : ''}"
				>
					<!-- Category header -->
					<div class="flex items-center justify-between mb-5">
						<div class="flex items-center gap-2.5">
							<div class="w-2 h-2 rounded-full" style="background: {color.dot};"></div>
							<span class="text-sm font-semibold" style="color: var(--c-text-secondary);">
								{$t.stack.categories[key]}
							</span>
						</div>
						{#if isAi}
							<span class="ai-badge">NEW</span>
						{/if}
					</div>

					<!-- Tech items -->
					<div class="flex flex-wrap gap-2">
						{#each techStack[key] as tech (tech.name)}
							<div
								class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
								style="background: {color.bg}; border: 1px solid {color.border}; color: {tech.featured ? 'var(--c-text-primary)' : 'var(--c-text-muted)'};"
							>
								{#if techIcons[tech.name]}
									{@const brand = techIcons[tech.name]}
									<svg
										class="tech-svg"
										viewBox={brand.viewBox}
										aria-hidden="true"
										style="color: var(--c-text-primary); {brand.color ? `fill: ${brand.color};` : ''}"
									>{@html brand.body}</svg>
								{:else}
									<span class="tech-icon">{tech.icon}</span>
								{/if}
								<span>{tech.name}</span>
								{#if tech.featured}
									<span class="w-1 h-1 rounded-full ml-0.5" style="background: {color.dot};"></span>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	/* AI card: ocupa las 2 últimas columnas en lg para destacarse */
	@media (min-width: 1024px) {
		.ai-card {
			grid-column: span 1;
		}
	}

	.ai-card {
		background: rgba(168, 85, 247, 0.04);
	}

	:global(.dark) .ai-card {
		background: rgba(168, 85, 247, 0.06);
	}

	.ai-badge {
		font-size: 9px;
		font-weight: 700;
		letter-spacing: 0.12em;
		padding: 2px 7px;
		border-radius: 9999px;
		background: rgba(168, 85, 247, 0.15);
		border: 1px solid rgba(168, 85, 247, 0.3);
		color: #a855f7;
		animation: pulse-badge 2.5s ease-in-out infinite;
	}

	:global(.dark) .ai-badge {
		background: rgba(168, 85, 247, 0.18);
		color: #d8b4fe;
	}

	@keyframes pulse-badge {
		0%, 100% { opacity: 0.85; }
		50%       { opacity: 1; }
	}

	.tech-svg {
		width: 14px;
		height: 14px;
		flex-shrink: 0;
	}

	.tech-icon {
		font-style: normal;
		line-height: 1;
	}
</style>
