<script>
	import { t } from '$lib/i18n/index.js';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import { onMount } from 'svelte';

	let el = $state(null);
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.15 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section id="about" class="py-24 lg:py-32" bind:this={el}>
	<div class="section-container">
		<div class="grid lg:grid-cols-2 gap-16 items-start">

			<!-- Left: Text -->
			<div
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(-24px)'}; transition: opacity 0.7s ease, transform 0.7s ease;"
			>
				<SectionLabel>{$t.about.label}</SectionLabel>

				<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6">
					{$t.about.title}<br/>
					<span class="text-gradient">{$t.about.title_highlight}</span>
				</h2>

				<p class="text-slate-400 leading-relaxed mb-4">
					{$t.about.description}
				</p>
				<p class="text-slate-400 leading-relaxed mb-8">
					{$t.about.description2}
				</p>

				<!-- Philosophy box -->
				<div class="glass rounded-xl p-5 border border-indigo-500/10">
					<p class="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
						{$t.about.philosophy_title}
					</p>
					<p class="text-slate-300 text-sm leading-relaxed italic">
						"{$t.about.philosophy}"
					</p>
				</div>
			</div>

			<!-- Right: Metrics + Strengths -->
			<div
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateX(0)' : 'translateX(24px)'}; transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;"
			>
				<!-- Metrics grid -->
				<div class="grid grid-cols-2 gap-4 mb-8">
					{#each Object.values($t.about.metrics) as metric (metric.label)}
						<div class="glass rounded-xl p-5 glass-hover">
							<div class="text-3xl font-bold text-gradient mb-1">{metric.value}</div>
							<div class="text-sm text-slate-400">{metric.label}</div>
						</div>
					{/each}
				</div>

				<!-- Strengths -->
				<div class="glass rounded-xl p-6">
					<p class="text-sm font-semibold text-slate-300 mb-4">{$t.about.strengths.title}</p>
					<ul class="space-y-2.5">
						{#each $t.about.strengths.items as item (item)}
							<li class="flex items-center gap-3 text-sm text-slate-400">
								<span class="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
