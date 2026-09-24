<script>
	import { t } from '$lib/i18n/index.js';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import ProjectGalleryModal from './ProjectGalleryModal.svelte';
	import { onMount } from 'svelte';

	let el = $state(null);
	let visible = $state(false);
	let galleryOpen = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.05 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});

	const projectIllustrations = {
		conlus: `
			<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<defs>
					<linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.15"/>
						<stop offset="100%" style="stop-color:#4f46e5;stop-opacity:0.05"/>
					</linearGradient>
				</defs>
				<rect width="400" height="220" fill="url(#g1)" rx="8"/>
				<!-- Map grid -->
				<g opacity="0.2">
					<line x1="0" y1="44" x2="400" y2="44" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="0" y1="88" x2="400" y2="88" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="0" y1="132" x2="400" y2="132" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="0" y1="176" x2="400" y2="176" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="80" y1="0" x2="80" y2="220" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="160" y1="0" x2="160" y2="220" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="240" y1="0" x2="240" y2="220" stroke="#6366f1" stroke-width="0.5"/>
					<line x1="320" y1="0" x2="320" y2="220" stroke="#6366f1" stroke-width="0.5"/>
				</g>
				<!-- Glow dots (map pins) -->
				<circle cx="120" cy="80" r="6" fill="#6366f1" opacity="0.8"/>
				<circle cx="120" cy="80" r="14" fill="#6366f1" opacity="0.15"/>
				<circle cx="200" cy="120" r="6" fill="#6366f1" opacity="0.8"/>
				<circle cx="200" cy="120" r="14" fill="#6366f1" opacity="0.15"/>
				<circle cx="280" cy="70" r="6" fill="#818cf8" opacity="0.8"/>
				<circle cx="280" cy="70" r="14" fill="#818cf8" opacity="0.15"/>
				<circle cx="160" cy="160" r="5" fill="#a5b4fc" opacity="0.6"/>
				<circle cx="310" cy="150" r="5" fill="#a5b4fc" opacity="0.6"/>
				<circle cx="80" cy="140" r="4" fill="#c7d2fe" opacity="0.5"/>
				<!-- Lines between pins -->
				<line x1="120" y1="80" x2="200" y2="120" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
				<line x1="200" y1="120" x2="280" y2="70" stroke="#6366f1" stroke-width="1" opacity="0.4"/>
				<!-- Dashboard panel -->
				<rect x="240" y="130" width="140" height="72" rx="6" fill="rgba(10,10,15,0.8)" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>
				<rect x="252" y="142" width="50" height="4" rx="2" fill="#6366f1" opacity="0.7"/>
				<rect x="252" y="152" width="36" height="3" rx="1.5" fill="#475569" opacity="0.6"/>
				<rect x="252" y="163" width="10" height="20" rx="2" fill="#6366f1" opacity="0.5"/>
				<rect x="266" y="156" width="10" height="27" rx="2" fill="#818cf8" opacity="0.5"/>
				<rect x="280" y="168" width="10" height="15" rx="2" fill="#a5b4fc" opacity="0.4"/>
				<rect x="294" y="160" width="10" height="23" rx="2" fill="#c7d2fe" opacity="0.3"/>
			</svg>`,
		simplify: `
			<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<defs>
					<linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.12"/>
						<stop offset="100%" style="stop-color:#0e7490;stop-opacity:0.04"/>
					</linearGradient>
				</defs>
				<rect width="400" height="220" fill="url(#g2)" rx="8"/>
				<!-- Chart area -->
				<rect x="20" y="20" width="200" height="120" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(6,182,212,0.2)" stroke-width="1"/>
				<!-- Line chart -->
				<polyline points="32,110 65,85 98,95 131,60 164,72 197,40" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.8"/>
				<polyline points="32,110 65,85 98,95 131,60 164,72 197,40 197,120 32,120" fill="#06b6d4" opacity="0.08"/>
				<!-- Y axis labels -->
				<rect x="32" y="37" width="20" height="3" rx="1.5" fill="#475569" opacity="0.5"/>
				<rect x="32" y="57" width="14" height="3" rx="1.5" fill="#475569" opacity="0.5"/>
				<rect x="32" y="77" width="18" height="3" rx="1.5" fill="#475569" opacity="0.5"/>
				<!-- Right panel: filters -->
				<rect x="230" y="20" width="150" height="180" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(6,182,212,0.2)" stroke-width="1"/>
				<rect x="242" y="34" width="50" height="4" rx="2" fill="#06b6d4" opacity="0.7"/>
				<rect x="242" y="48" width="120" height="24" rx="4" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.15)" stroke-width="1"/>
				<rect x="250" y="56" width="40" height="3" rx="1.5" fill="#94a3b8" opacity="0.6"/>
				<rect x="242" y="80" width="120" height="24" rx="4" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.15)" stroke-width="1"/>
				<rect x="250" y="88" width="55" height="3" rx="1.5" fill="#94a3b8" opacity="0.6"/>
				<rect x="242" y="112" width="120" height="24" rx="4" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.15)" stroke-width="1"/>
				<rect x="250" y="120" width="30" height="3" rx="1.5" fill="#94a3b8" opacity="0.6"/>
				<!-- Donut chart -->
				<circle cx="115" cy="180" r="26" fill="none" stroke="#0e7490" stroke-width="16" opacity="0.3"/>
				<circle cx="115" cy="180" r="26" fill="none" stroke="#06b6d4" stroke-width="16" stroke-dasharray="60 104" stroke-dashoffset="26" opacity="0.7"/>
				<circle cx="115" cy="180" r="26" fill="none" stroke="#67e8f9" stroke-width="16" stroke-dasharray="30 134" stroke-dashoffset="-34" opacity="0.5"/>
				<!-- DB tags -->
				<rect x="20" y="155" width="44" height="18" rx="4" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.25)" stroke-width="1"/>
				<rect x="25" y="161" width="34" height="3" rx="1.5" fill="#ef4444" opacity="0.6"/>
				<rect x="20" y="177" width="44" height="18" rx="4" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.2)" stroke-width="1"/>
				<rect x="25" y="183" width="28" height="3" rx="1.5" fill="#06b6d4" opacity="0.6"/>
			</svg>`,
		'mobile-ops': `
			<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<defs>
					<linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:#10b981;stop-opacity:0.12"/>
						<stop offset="100%" style="stop-color:#059669;stop-opacity:0.04"/>
					</linearGradient>
				</defs>
				<rect width="400" height="220" fill="url(#g3)" rx="8"/>
				<!-- Phone outline -->
				<rect x="140" y="10" width="120" height="200" rx="16" fill="rgba(10,10,15,0.9)" stroke="rgba(16,185,129,0.3)" stroke-width="1.5"/>
				<rect x="148" y="24" width="104" height="170" rx="8" fill="rgba(20,20,30,0.8)"/>
				<!-- Screen content -->
				<rect x="156" y="34" width="88" height="10" rx="3" fill="rgba(16,185,129,0.4)"/>
				<rect x="156" y="50" width="88" height="28" rx="4" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.15)" stroke-width="1"/>
				<rect x="162" y="56" width="50" height="3" rx="1.5" fill="#10b981" opacity="0.7"/>
				<rect x="162" y="64" width="36" height="2.5" rx="1.25" fill="#475569" opacity="0.5"/>
				<!-- Status dots -->
				<circle cx="226" cy="62" r="4" fill="#10b981" opacity="0.8"/>
				<!-- Work orders list -->
				<rect x="156" y="86" width="88" height="18" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
				<circle cx="165" cy="95" r="3" fill="#10b981" opacity="0.7"/>
				<rect x="172" y="92" width="38" height="2.5" rx="1.25" fill="#94a3b8" opacity="0.6"/>
				<rect x="172" y="97" width="24" height="2" rx="1" fill="#475569" opacity="0.4"/>
				<rect x="156" y="108" width="88" height="18" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
				<circle cx="165" cy="117" r="3" fill="#f59e0b" opacity="0.7"/>
				<rect x="172" y="114" width="44" height="2.5" rx="1.25" fill="#94a3b8" opacity="0.6"/>
				<rect x="172" y="119" width="28" height="2" rx="1" fill="#475569" opacity="0.4"/>
				<rect x="156" y="130" width="88" height="18" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
				<circle cx="165" cy="139" r="3" fill="#6366f1" opacity="0.7"/>
				<rect x="172" y="136" width="30" height="2.5" rx="1.25" fill="#94a3b8" opacity="0.6"/>
				<!-- GPS indicator -->
				<rect x="162" y="160" width="76" height="22" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
				<circle cx="173" cy="171" r="4" fill="none" stroke="#10b981" stroke-width="1.5"/>
				<circle cx="173" cy="171" r="1.5" fill="#10b981"/>
				<rect x="181" y="168" width="32" height="2.5" rx="1.25" fill="#10b981" opacity="0.8"/>
				<rect x="181" y="173" width="22" height="2" rx="1" fill="#475569" opacity="0.5"/>
				<!-- Sync status (side) -->
				<rect x="20" y="60" width="110" height="50" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(16,185,129,0.2)" stroke-width="1"/>
				<rect x="30" y="72" width="30" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
				<rect x="30" y="80" width="90" height="2.5" rx="1.25" fill="#475569" opacity="0.4"/>
				<rect x="30" y="86" width="70" height="2.5" rx="1.25" fill="#475569" opacity="0.3"/>
				<!-- Offline badge -->
				<rect x="20" y="120" width="80" height="22" rx="5" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.25)" stroke-width="1"/>
				<rect x="30" y="129" width="40" height="2.5" rx="1.25" fill="#f59e0b" opacity="0.7"/>
				<!-- Right side info -->
				<rect x="280" y="40" width="100" height="70" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(16,185,129,0.2)" stroke-width="1"/>
				<rect x="290" y="52" width="40" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
				<rect x="290" y="62" width="28" height="20" rx="3" fill="rgba(16,185,129,0.2)"/>
				<rect x="292" y="78" width="24" height="2" rx="1" fill="#10b981" opacity="0.4"/>
				<rect x="326" y="62" width="44" height="20" rx="3" fill="rgba(16,185,129,0.08)"/>
				<rect x="328" y="78" width="36" height="2" rx="1" fill="#475569" opacity="0.3"/>
			</svg>`,
		'ap-pilot': `
				<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
					<defs>
						<linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.14"/>
							<stop offset="100%" style="stop-color:#7e22ce;stop-opacity:0.04"/>
						</linearGradient>
					</defs>
					<rect width="400" height="220" fill="url(#g5)" rx="8"/>
					<!-- Map grid -->
					<g opacity="0.18">
						<line x1="0" y1="55" x2="400" y2="55" stroke="#a855f7" stroke-width="0.5"/>
						<line x1="0" y1="110" x2="400" y2="110" stroke="#a855f7" stroke-width="0.5"/>
						<line x1="0" y1="165" x2="400" y2="165" stroke="#a855f7" stroke-width="0.5"/>
						<line x1="100" y1="0" x2="100" y2="220" stroke="#a855f7" stroke-width="0.5"/>
						<line x1="200" y1="0" x2="200" y2="220" stroke="#a855f7" stroke-width="0.5"/>
						<line x1="300" y1="0" x2="300" y2="220" stroke="#a855f7" stroke-width="0.5"/>
					</g>
					<!-- Clusters -->
					<circle cx="70" cy="60" r="18" fill="#a855f7" opacity="0.25"/>
					<circle cx="70" cy="60" r="11" fill="#a855f7" opacity="0.7"/>
					<circle cx="150" cy="130" r="22" fill="#a855f7" opacity="0.25"/>
					<circle cx="150" cy="130" r="14" fill="#c084fc" opacity="0.7"/>
					<circle cx="60" cy="150" r="12" fill="#a855f7" opacity="0.25"/>
					<circle cx="60" cy="150" r="7" fill="#d8b4fe" opacity="0.7"/>
					<circle cx="200" cy="55" r="9" fill="#a855f7" opacity="0.25"/>
					<circle cx="200" cy="55" r="5" fill="#d8b4fe" opacity="0.7"/>
					<circle cx="110" cy="190" r="5" fill="#e9d5ff" opacity="0.6"/>
					<circle cx="215" cy="175" r="4" fill="#e9d5ff" opacity="0.5"/>
					<!-- Phone -->
					<rect x="270" y="20" width="96" height="180" rx="14" fill="rgba(10,10,15,0.9)" stroke="rgba(168,85,247,0.35)" stroke-width="1.5"/>
					<rect x="278" y="34" width="80" height="152" rx="7" fill="rgba(20,20,30,0.8)"/>
					<rect x="284" y="42" width="68" height="8" rx="3" fill="rgba(168,85,247,0.45)"/>
					<rect x="284" y="58" width="68" height="24" rx="4" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.2)" stroke-width="1"/>
					<rect x="290" y="64" width="40" height="3" rx="1.5" fill="#a855f7" opacity="0.7"/>
					<rect x="290" y="72" width="28" height="2.5" rx="1.25" fill="#475569" opacity="0.5"/>
					<rect x="284" y="90" width="68" height="16" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
					<circle cx="292" cy="98" r="3" fill="#10b981" opacity="0.8"/>
					<rect x="299" y="96" width="34" height="2.5" rx="1.25" fill="#94a3b8" opacity="0.6"/>
					<rect x="284" y="110" width="68" height="16" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
					<circle cx="292" cy="118" r="3" fill="#f59e0b" opacity="0.8"/>
					<rect x="299" y="116" width="28" height="2.5" rx="1.25" fill="#94a3b8" opacity="0.6"/>
					<!-- Sync badge -->
					<rect x="284" y="150" width="68" height="22" rx="5" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
					<rect x="292" y="159" width="36" height="3" rx="1.5" fill="#10b981" opacity="0.8"/>
					<!-- Sync link map -> phone -->
					<line x1="215" y1="120" x2="268" y2="120" stroke="#a855f7" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
					<polygon points="268,116 276,120 268,124" fill="#a855f7" opacity="0.5"/>
				</svg>`,
			indra: `
			<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
				<defs>
					<linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.1"/>
						<stop offset="100%" style="stop-color:#d97706;stop-opacity:0.03"/>
					</linearGradient>
				</defs>
				<rect width="400" height="220" fill="url(#g4)" rx="8"/>
				<!-- System boxes -->
				<rect x="20" y="80" width="80" height="50" rx="6" fill="rgba(10,10,15,0.8)" stroke="rgba(245,158,11,0.3)" stroke-width="1"/>
				<rect x="30" y="92" width="40" height="3" rx="1.5" fill="#f59e0b" opacity="0.7"/>
				<rect x="30" y="100" width="60" height="2.5" rx="1.25" fill="#475569" opacity="0.5"/>
				<rect x="30" y="108" width="44" height="2.5" rx="1.25" fill="#475569" opacity="0.4"/>
				<!-- Arrow right -->
				<line x1="100" y1="105" x2="140" y2="105" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
				<polygon points="140,101 148,105 140,109" fill="#f59e0b" opacity="0.5"/>
				<!-- Middle transform box -->
				<rect x="150" y="70" width="100" height="70" rx="6" fill="rgba(10,10,15,0.8)" stroke="rgba(99,102,241,0.3)" stroke-width="1"/>
				<rect x="160" y="82" width="50" height="3" rx="1.5" fill="#6366f1" opacity="0.7"/>
				<rect x="160" y="92" width="80" height="18" rx="3" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>
				<rect x="166" y="98" width="40" height="2.5" rx="1.25" fill="#a5b4fc" opacity="0.6"/>
				<rect x="160" y="116" width="80" height="14" rx="3" fill="rgba(99,102,241,0.06)"/>
				<rect x="166" y="121" width="55" height="2" rx="1" fill="#475569" opacity="0.4"/>
				<!-- Arrow right -->
				<line x1="250" y1="105" x2="280" y2="105" stroke="#6366f1" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
				<polygon points="280,101 288,105 280,109" fill="#6366f1" opacity="0.5"/>
				<!-- Target system -->
				<rect x="290" y="80" width="90" height="50" rx="6" fill="rgba(10,10,15,0.8)" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
				<rect x="300" y="92" width="45" height="3" rx="1.5" fill="#10b981" opacity="0.7"/>
				<rect x="300" y="100" width="70" height="2.5" rx="1.25" fill="#475569" opacity="0.5"/>
				<rect x="300" y="108" width="50" height="2.5" rx="1.25" fill="#475569" opacity="0.4"/>
				<!-- Top labels -->
				<rect x="30" y="62" width="56" height="14" rx="3" fill="rgba(245,158,11,0.12)" stroke="rgba(245,158,11,0.2)" stroke-width="1"/>
				<rect x="37" y="67" width="42" height="2.5" rx="1.25" fill="#f59e0b" opacity="0.7"/>
				<rect x="170" y="50" width="60" height="14" rx="3" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
				<rect x="177" y="55" width="46" height="2.5" rx="1.25" fill="#a5b4fc" opacity="0.7"/>
				<rect x="296" y="62" width="70" height="14" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" stroke-width="1"/>
				<rect x="303" y="67" width="56" height="2.5" rx="1.25" fill="#10b981" opacity="0.7"/>
				<!-- Bottom stats -->
				<rect x="60" y="168" width="120" height="32" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
				<rect x="72" y="178" width="30" height="3" rx="1.5" fill="#f59e0b" opacity="0.6"/>
				<rect x="72" y="186" width="20" height="2.5" rx="1.25" fill="#475569" opacity="0.4"/>
				<rect x="220" y="168" width="120" height="32" rx="6" fill="rgba(10,10,15,0.7)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
				<rect x="232" y="178" width="40" height="3" rx="1.5" fill="#10b981" opacity="0.6"/>
				<rect x="232" y="186" width="24" height="2.5" rx="1.25" fill="#475569" opacity="0.4"/>
			</svg>`
	};
</script>

<section id="projects" class="py-24 lg:py-32" bind:this={el}>
	<div class="section-container">
		<div class="text-center max-w-2xl mx-auto mb-16"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
		>
			<SectionLabel>{$t.projects.label}</SectionLabel>
			<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">{$t.projects.title}</h2>
			<p class="text-slate-400">{$t.projects.subtitle}</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-6">
			{#each $t.projects.items as project, i (project.id)}
				<article
					class="group relative rounded-2xl overflow-hidden glass glass-hover cursor-default"
					style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(28px)'}; transition: opacity 0.6s ease {i * 100}ms, transform 0.6s ease {i * 100}ms;"
				>
					<!-- Project illustration -->
					<div class="relative h-48 overflow-hidden"
						style="background: linear-gradient(135deg, rgba(10,10,15,0.9) 0%, rgba(20,20,30,0.8) 100%);"
					>
						{@html projectIllustrations[project.id] || ''}
						<!-- Category badge overlay -->
						<div class="absolute top-3 left-3">
							<span class="badge text-xs">
								{project.category}
							</span>
						</div>
						{#if project.featured}
							<div class="absolute top-3 right-3">
								<span class="badge-cyan badge text-xs">Featured</span>
							</div>
						{/if}
					</div>

					<!-- Content -->
					<div class="p-6">
						<div class="flex items-start justify-between gap-3 mb-3">
							<div>
								<h3 class="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
									{project.title}
								</h3>
								<p class="text-xs text-slate-500 mt-0.5">{project.company}</p>
							</div>
							<div class="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
								style="background: {project.color}20; border: 1px solid {project.color}30;"
							>
								<div class="w-2 h-2 rounded-full" style="background: {project.color};"></div>
							</div>
						</div>

						<p class="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

						<!-- Impact -->
						<div class="rounded-lg p-3 mb-4" style="background: {project.color}08; border: 1px solid {project.color}15;">
							<p class="text-xs font-semibold uppercase tracking-wide mb-1" style="color: {project.color}; opacity: 0.8;">
								{$t.projects.impact_label}
							</p>
							<p class="text-xs text-slate-400 leading-relaxed">{project.impact}</p>
						</div>

						{#if project.repo}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									class="repo-link mb-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
									style="color: {project.color}; background: {project.color}10; border: 1px solid {project.color}25;"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
										<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
									</svg>
									{$t.projects.repo_btn}
									<svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
										<path d="M4 10L10 4M5 4h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</a>
							{/if}

							<!-- Tags + Stack -->
						<div class="flex flex-wrap gap-1.5 mb-3">
							{#each project.tags.slice(0, 4) as tag (tag)}
								<span class="px-2 py-0.5 rounded text-xs text-slate-500"
									style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);"
								>{tag}</span>
							{/each}
						</div>
						<div class="flex items-center gap-1.5">
							<span class="text-xs text-slate-600">{$t.projects.stack_label}:</span>
							{#each project.stack.slice(0, 4) as tech (tech)}
								<span class="px-2 py-0.5 rounded text-xs font-medium" style="color: {project.color}; background: {project.color}10; border: 1px solid {project.color}20;">{tech}</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Gallery CTA -->
		<div
			class="flex justify-center mt-12"
			style="opacity: {visible ? 1 : 0}; transition: opacity 0.7s ease 0.5s;"
		>
			<button
				onclick={() => (galleryOpen = true)}
				class="gallery-trigger"
				aria-label={$t.projects.gallery_btn}
			>
				<!-- Orb cian — lidera el recorrido -->
				<span class="orb orb-cyan" aria-hidden="true"></span>
				<!-- Orb índigo — sigue con 50% de desfase -->
				<span class="orb orb-indigo" aria-hidden="true"></span>

				<!-- Contenido real del botón -->
				<span class="trigger-inner">
					<!-- Ícono 2×2 cuadrados -->
					<svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true" class="trigger-icon">
						<rect x="1"  y="1"  width="9" height="9" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
						<rect x="12" y="1"  width="9" height="9" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
						<rect x="1"  y="12" width="9" height="9" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
						<rect x="12" y="12" width="9" height="9" rx="2.5" stroke="currentColor" stroke-width="1.6"/>
					</svg>
					<span class="trigger-label">{$t.projects.gallery_btn}</span>
					<!-- Flecha -->
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" class="trigger-arrow">
						<path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</span>
			</button>
		</div>
	</div>
</section>

<ProjectGalleryModal bind:open={galleryOpen} />

<style>
	/* ── Velocidad del recorrido — cambia en hover ────────── */
	.gallery-trigger {
		--speed: 4s;
		--r: 16px;
		--core: 5px;           /* núcleo pequeño */
		--half-core: 2.5px;
	}
	.gallery-trigger:hover { --speed: 2.2s; }

	/* ── Botón contenedor ─────────────────────────────────── */
	.gallery-trigger {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border-radius: var(--r);
		cursor: pointer;
		background: transparent;
		border: none;
		outline: none;
		overflow: hidden;
		isolation: isolate;
	}

	/* Cara opaca — inset deja un anillo donde se ve el glow detrás */
	.gallery-trigger::before {
		content: '';
		position: absolute;
		inset: 2px;
		border-radius: calc(var(--r) - 2px);
		background: var(--c-surface);
		border: 1px solid rgba(255, 255, 255, 0.08);
		transition: border-color 0.3s ease, background 0.3s ease;
		z-index: 2;
	}

	:global(.dark) .gallery-trigger::before {
		background: #0d1726;
		border-color: rgba(255, 255, 255, 0.07);
		box-shadow:
			inset 0 1px 0 rgba(255, 255, 255, 0.04),
			0 16px 40px rgba(0, 0, 0, 0.35);
	}

	.gallery-trigger:hover::before {
		border-color: rgba(99, 102, 241, 0.35);
		background: rgba(13, 23, 38, 0.98);
	}

	/* ── Orbes (detrás de la cara del botón) ──────────────── */
	.orb {
		position: absolute;
		width: var(--core);
		height: var(--core);
		border-radius: 50%;
		pointer-events: none;
		z-index: 1;
		animation: orbit var(--speed) linear infinite;
	}

	/* Halo grande + núcleo pequeño */
	.orb::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 56px;
		height: 56px;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		pointer-events: none;
	}

	.orb::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 50%;
	}

	.orb-cyan::before {
		background: radial-gradient(
			circle,
			rgba(6, 182, 212, 0.95) 0%,
			rgba(34, 211, 238, 0.55) 18%,
			rgba(6, 182, 212, 0.25) 38%,
			transparent 68%
		);
		filter: blur(6px);
	}

	.orb-cyan::after {
		background: #e0f2fe;
		box-shadow: 0 0 6px 1px rgba(6, 182, 212, 0.9);
	}

	.orb-indigo {
		animation-delay: calc(var(--speed) * -0.5);
	}

	.orb-indigo::before {
		background: radial-gradient(
			circle,
			rgba(99, 102, 241, 0.95) 0%,
			rgba(129, 140, 248, 0.5) 20%,
			rgba(99, 102, 241, 0.22) 40%,
			transparent 70%
		);
		filter: blur(7px);
	}

	.orb-indigo::after {
		background: #ddd6fe;
		box-shadow: 0 0 6px 1px rgba(99, 102, 241, 0.85);
	}

	@keyframes orbit {
		0%   { top: calc(0px - var(--half-core)); left: 0; }
		45%  { top: calc(0px - var(--half-core)); left: calc(100% - var(--core)); }
		50%  { top: calc(100% - var(--half-core)); left: calc(100% - var(--core)); }
		95%  { top: calc(100% - var(--half-core)); left: 0; }
		100% { top: calc(0px - var(--half-core)); left: 0; }
	}

	/* ── Contenido encima de todo ─────────────────────────── */
	.trigger-inner {
		position: relative;
		z-index: 3;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 13px 28px;
		font-size: 14px;
		font-weight: 500;
		color: var(--c-text-secondary);
		transition: color 0.25s ease;
		border-radius: var(--r);
	}

	.gallery-trigger:hover .trigger-inner {
		color: var(--c-text-primary);
	}

	/* Ícono de cuadrícula — rota suavemente al hacer hover */
	.trigger-icon {
		flex-shrink: 0;
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.gallery-trigger:hover .trigger-icon {
		transform: rotate(90deg);
	}

	/* Flecha — aparece deslizándose desde la izquierda */
	.trigger-arrow {
		opacity: 0;
		transform: translateX(-6px);
		transition: opacity 0.25s ease, transform 0.25s ease;
	}
	.gallery-trigger:hover .trigger-arrow {
		opacity: 1;
		transform: translateX(0);
	}
</style>
