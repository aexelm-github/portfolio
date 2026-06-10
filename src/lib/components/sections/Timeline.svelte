<script>
	import { t } from '$lib/i18n/index.js';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import { onMount } from 'svelte';

	let el = $state(null);
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.08 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section id="experience" class="py-24 lg:py-32" bind:this={el}>
	<div class="section-container">
		<div class="max-w-2xl mb-16"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
		>
			<SectionLabel>{$t.timeline.label}</SectionLabel>
			<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">{$t.timeline.title}</h2>
			<p class="text-slate-400">{$t.timeline.subtitle}</p>
		</div>

		<div class="relative">
			<!-- Vertical line -->
			<div class="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
				style="background: linear-gradient(to bottom, transparent 0%, rgba(99,102,241,0.3) 10%, rgba(99,102,241,0.15) 90%, transparent 100%);">
			</div>

			<div class="space-y-6 sm:space-y-8">
				{#each $t.timeline.items as item, i (item.id)}
					<div
						class="relative sm:pl-16"
						style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(-20px)'}; transition: opacity 0.6s ease {i * 120}ms, transform 0.6s ease {i * 120}ms;"
					>
						<!-- Timeline dot -->
						<div class="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center"
							style="background: {item.color}20; border-color: {item.color}; box-shadow: 0 0 12px {item.color}40; transform: translateX(-50%);"
						>
							<div class="w-1.5 h-1.5 rounded-full" style="background: {item.color};"></div>
						</div>

						<!-- Card -->
						<div class="glass rounded-2xl p-6 glass-hover">
							<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
								<div>
									<h3 class="text-lg font-bold text-slate-100">{item.role}</h3>
									<div class="flex items-center gap-2 mt-1">
										<span class="text-sm font-medium" style="color: {item.color};">{item.company}</span>
									</div>
								</div>
								<div class="flex flex-col sm:items-end gap-1 flex-shrink-0">
									<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
										style="background: {item.color}10; border: 1px solid {item.color}25; color: {item.color};"
									>
										{#if item.period.includes('Presente') || item.period.includes('Present')}
											<span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block"></span>
										{/if}
										{item.period}
									</span>
									<span class="text-xs text-slate-500 flex items-center gap-1">
										<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
											<circle cx="5" cy="4" r="2.5" stroke="currentColor" stroke-width="1"/>
											<path d="M5 7.5c0 0-3 2-3 2" stroke="none"/>
											<path d="M2 8.5s3-2 3-2 3 2 3 2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
										</svg>
										{item.location}
									</span>
								</div>
							</div>

							<p class="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

							<ul class="space-y-1.5">
								{#each item.highlights as highlight (highlight)}
									<li class="flex items-start gap-2.5 text-sm text-slate-400">
										<span class="w-1 h-1 rounded-full mt-2 flex-shrink-0" style="background: {item.color}; opacity: 0.7;"></span>
										{highlight}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
