<script>
	import { t } from '$lib/i18n/index.js';
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

	const architectureLayers = [
		{
			id: 'mobile',
			label: 'Mobile Layer',
			color: '#10b981',
			items: [
				{ name: 'React Native', sub: 'iOS / Android' },
				{ name: 'Android (Kotlin)', sub: 'Native' },
				{ name: 'Offline Storage', sub: 'SQLite' }
			]
		},
		{
			id: 'api',
			label: 'API Gateway',
			color: '#6366f1',
			items: [
				{ name: 'REST API', sub: 'Node.js / PHP' },
				{ name: 'Auth Layer', sub: 'JWT / Session' },
				{ name: 'Rate Limiting', sub: 'Middleware' }
			]
		},
		{
			id: 'services',
			label: 'Business Services',
			color: '#06b6d4',
			items: [
				{ name: 'Core Engine', sub: 'Business Logic' },
				{ name: 'Geo Services', sub: 'Geolocation' },
				{ name: 'Sync Engine', sub: 'Real-time' },
				{ name: 'Report Gen', sub: 'Analytics' }
			]
		},
		{
			id: 'data',
			label: 'Data Layer',
			color: '#f59e0b',
			items: [
				{ name: 'Oracle DB', sub: 'Enterprise' },
				{ name: 'MySQL', sub: 'Operational' },
				{ name: 'File Storage', sub: 'Media / Docs' }
			]
		},
		{
			id: 'infra',
			label: 'Infrastructure',
			color: '#8b5cf6',
			items: [
				{ name: 'Linux VPS', sub: 'Ubuntu / CentOS' },
				{ name: 'Apache', sub: 'Web Server' },
				{ name: 'GitHub', sub: 'CI/CD' }
			]
		}
	];
</script>

<section id="architecture" class="py-24 lg:py-32" bind:this={el}>
	<div class="section-container">
		<div class="text-center max-w-2xl mx-auto mb-16"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
		>
			<SectionLabel>{$t.architecture.label}</SectionLabel>
			<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">{$t.architecture.title}</h2>
			<p class="text-slate-400">{$t.architecture.subtitle}</p>
		</div>

		<div class="grid lg:grid-cols-5 gap-4 mb-16"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(24px)'}; transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;"
		>
			{#each architectureLayers as layer, i (layer.id)}
				<div class="flex flex-col gap-3">
					<!-- Layer header -->
					<div class="text-center pb-3 border-b" style="border-color: {layer.color}25;">
						<div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-1"
							style="background: {layer.color}12; border: 1px solid {layer.color}25; color: {layer.color};"
						>
							{layer.label}
						</div>
					</div>

					<!-- Layer items -->
					{#each layer.items as item (item.name)}
						<div class="glass rounded-xl p-3 text-center glass-hover"
							style="border-color: {layer.color}10;"
						>
							<p class="text-xs font-semibold text-slate-200 mb-0.5">{item.name}</p>
							<p class="text-xs text-slate-500">{item.sub}</p>
						</div>
					{/each}

					<!-- Connector arrow (not last) -->
					{#if i < architectureLayers.length - 1}
						<div class="hidden lg:flex items-center justify-end mt-auto">
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Architecture diagram SVG -->
		<div class="glass rounded-2xl p-6 mb-12 overflow-hidden"
			style="opacity: {visible ? 1 : 0}; transition: opacity 0.7s ease 0.3s;"
		>
			<p class="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 text-center">
				{$t.architecture.diagram_title}
			</p>
			<div class="w-full overflow-x-auto">
				<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" class="w-full min-w-[600px]">
					<!-- Background subtle grid -->
					<defs>
						<marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
							<polygon points="0 0, 6 2, 0 4" fill="rgba(99,102,241,0.5)"/>
						</marker>
						<marker id="arrowhead-cyan" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
							<polygon points="0 0, 6 2, 0 4" fill="rgba(6,182,212,0.5)"/>
						</marker>
					</defs>

					<!-- Mobile clients -->
					<rect x="20" y="100" width="120" height="60" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" stroke-width="1"/>
					<text x="80" y="127" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="Inter, sans-serif" font-weight="600">Mobile App</text>
					<text x="80" y="143" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">React Native</text>

					<rect x="20" y="175" width="120" height="50" rx="8" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.15)" stroke-width="1"/>
					<text x="80" y="198" text-anchor="middle" fill="#6ee7b7" font-size="11" font-family="Inter, sans-serif" font-weight="600">Offline Store</text>
					<text x="80" y="212" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">SQLite + Sync</text>

					<!-- Web clients -->
					<rect x="20" y="25" width="120" height="50" rx="8" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" stroke-width="1"/>
					<text x="80" y="47" text-anchor="middle" fill="#a5b4fc" font-size="11" font-family="Inter, sans-serif" font-weight="600">Web Platform</text>
					<text x="80" y="61" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">SvelteKit</text>

					<!-- Arrows to API GW -->
					<line x1="140" y1="50" x2="220" y2="130" stroke="rgba(99,102,241,0.4)" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead)"/>
					<line x1="140" y1="130" x2="220" y2="140" stroke="rgba(16,185,129,0.4)" stroke-width="1.5" marker-end="url(#arrowhead)"/>
					<line x1="140" y1="200" x2="220" y2="155" stroke="rgba(16,185,129,0.3)" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead)"/>

					<!-- API Gateway -->
					<rect x="220" y="90" width="130" height="80" rx="10" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.35)" stroke-width="1.5"/>
					<text x="285" y="126" text-anchor="middle" fill="#a5b4fc" font-size="12" font-family="Inter, sans-serif" font-weight="700">API Gateway</text>
					<text x="285" y="142" text-anchor="middle" fill="#6366f1" font-size="9" font-family="Inter, sans-serif">Auth · Rate Limit · Route</text>
					<text x="285" y="156" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Node.js / PHP</text>

					<!-- Arrow to Services -->
					<line x1="350" y1="130" x2="420" y2="130" stroke="rgba(6,182,212,0.5)" stroke-width="1.5" marker-end="url(#arrowhead-cyan)"/>

					<!-- Business Services -->
					<rect x="420" y="50" width="120" height="55" rx="8" fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.22)" stroke-width="1"/>
					<text x="480" y="74" text-anchor="middle" fill="#67e8f9" font-size="10" font-family="Inter, sans-serif" font-weight="600">Core Services</text>
					<text x="480" y="88" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Business Logic</text>
					<text x="480" y="99" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Geo · Sync · Reports</text>

					<rect x="420" y="115" width="120" height="55" rx="8" fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.22)" stroke-width="1"/>
					<text x="480" y="139" text-anchor="middle" fill="#67e8f9" font-size="10" font-family="Inter, sans-serif" font-weight="600">Real-time Engine</text>
					<text x="480" y="153" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Dashboards · Events</text>
					<text x="480" y="164" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">WebSocket / Polling</text>

					<rect x="420" y="180" width="120" height="55" rx="8" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.15)" stroke-width="1"/>
					<text x="480" y="204" text-anchor="middle" fill="#67e8f9" font-size="10" font-family="Inter, sans-serif" font-weight="600">Analytics Engine</text>
					<text x="480" y="218" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Reports · KPIs</text>
					<text x="480" y="229" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Simplify+ Platform</text>

					<!-- Arrows to DB -->
					<line x1="540" y1="77" x2="620" y2="100" stroke="rgba(245,158,11,0.4)" stroke-width="1.5" marker-end="url(#arrowhead)"/>
					<line x1="540" y1="143" x2="620" y2="140" stroke="rgba(245,158,11,0.4)" stroke-width="1.5" marker-end="url(#arrowhead)"/>
					<line x1="540" y1="207" x2="620" y2="185" stroke="rgba(245,158,11,0.3)" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arrowhead)"/>

					<!-- Data Layer -->
					<rect x="620" y="70" width="110" height="45" rx="8" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.25)" stroke-width="1"/>
					<text x="675" y="91" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="Inter, sans-serif" font-weight="600">Oracle DB</text>
					<text x="675" y="104" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Enterprise Data</text>

					<rect x="620" y="125" width="110" height="45" rx="8" fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.2)" stroke-width="1"/>
					<text x="675" y="146" text-anchor="middle" fill="#67e8f9" font-size="10" font-family="Inter, sans-serif" font-weight="600">MySQL</text>
					<text x="675" y="159" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Operational Data</text>

					<rect x="620" y="180" width="110" height="45" rx="8" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.2)" stroke-width="1"/>
					<text x="675" y="201" text-anchor="middle" fill="#fde68a" font-size="10" font-family="Inter, sans-serif" font-weight="600">File Storage</text>
					<text x="675" y="214" text-anchor="middle" fill="#475569" font-size="9" font-family="Inter, sans-serif">Media · Reports</text>

					<!-- Layer labels at bottom -->
					<text x="80" y="248" text-anchor="middle" fill="#374151" font-size="8" font-family="Inter, sans-serif" font-weight="600" letter-spacing="1">CLIENTS</text>
					<text x="285" y="248" text-anchor="middle" fill="#374151" font-size="8" font-family="Inter, sans-serif" font-weight="600" letter-spacing="1">GATEWAY</text>
					<text x="480" y="248" text-anchor="middle" fill="#374151" font-size="8" font-family="Inter, sans-serif" font-weight="600" letter-spacing="1">SERVICES</text>
					<text x="675" y="248" text-anchor="middle" fill="#374151" font-size="8" font-family="Inter, sans-serif" font-weight="600" letter-spacing="1">DATA</text>
				</svg>
			</div>
		</div>

		<!-- Design principles -->
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
			style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;"
		>
			<h3 class="sm:col-span-2 lg:col-span-4 text-sm font-semibold text-slate-300 mb-2">
				{$t.architecture.principles.title}
			</h3>
			{#each $t.architecture.principles.items as principle, i (principle.title)}
				<div class="glass rounded-xl p-5 glass-hover">
					<div class="w-8 h-8 rounded-lg mb-3 flex items-center justify-center"
						style="background: rgba(99,102,241,{0.08 + i * 0.02}); border: 1px solid rgba(99,102,241,0.15);"
					>
						<span class="text-indigo-400 text-xs font-bold font-mono">0{i + 1}</span>
					</div>
					<h4 class="text-sm font-semibold text-slate-200 mb-1.5">{principle.title}</h4>
					<p class="text-xs text-slate-500 leading-relaxed">{principle.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
