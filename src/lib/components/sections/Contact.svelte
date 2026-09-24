<script>
	import { t } from '$lib/i18n/index.js';
	import SectionLabel from '$lib/components/ui/SectionLabel.svelte';
	import { onMount } from 'svelte';

	let el = $state(null);
	let visible = $state(false);
	let copied = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) visible = true; },
			{ threshold: 0.1 }
		);
		if (el) observer.observe(el);
		return () => observer.disconnect();
	});

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText($t.contact.email);
			copied = true;
			setTimeout(() => { copied = false; }, 2000);
		} catch {
			// Fallback silencioso
		}
	};

	const socialLinks = [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/exel-avenda%C3%B1o-224577245',
			icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
			color: '#0077b5'
		},
		{
			name: 'GitHub',
			href: 'https://github.com/aexelm-github',
			icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`,
			color: 'var(--c-text-secondary)'
		},
		{
			name: 'WhatsApp',
			href: 'https://wa.me/573003672520',
			icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
			color: '#25d366'
		}
	];
</script>

<section id="contact" class="py-24 lg:py-32 relative" bind:this={el}>
	<!-- Subtle background glow -->
	<div class="absolute inset-0 pointer-events-none overflow-hidden">
		<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
			style="background: radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%); filter: blur(20px);">
		</div>
	</div>

	<div class="section-container relative z-10">
		<div class="max-w-3xl mx-auto">
			<div class="text-center mb-12"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease, transform 0.6s ease;"
			>
				<SectionLabel>{$t.contact.label}</SectionLabel>
				<h2 class="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">{$t.contact.title}</h2>
				<p class="text-slate-400 max-w-xl mx-auto">{$t.contact.subtitle}</p>
			</div>

			<!-- Contact card -->
			<div
				class="glass rounded-2xl p-8 mb-8"
				style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;"
			>
				<div class="grid sm:grid-cols-3 gap-6 mb-8">
					<!-- Email -->
					<div>
						<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</p>
						<button
							onclick={copyEmail}
							class="group flex items-center gap-2 text-sm transition-colors"
							style="color: var(--c-text-secondary);"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-indigo-400 flex-shrink-0">
								<rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
								<path d="M1 3.5l6 4 6-4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
							</svg>
							<span class="font-mono text-xs">{$t.contact.email}</span>
							<span class="text-xs ml-1 transition-colors" style="color: var(--c-text-faint);">
								{copied ? $t.contact.copied : $t.contact.copy_email}
							</span>
						</button>
					</div>

					<!-- Phone -->
					<div>
						<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Phone</p>
						<a
							href="tel:+573003672520"
							class="flex items-center gap-2 text-sm transition-colors"
							style="color: var(--c-text-secondary);"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-emerald-400 flex-shrink-0">
								<path d="M2 2.5A1.5 1.5 0 013.5 1h1.618c.38 0 .72.214.894.553l1.218 2.436a1 1 0 01-.164 1.11L5.92 6.26a7.09 7.09 0 003.82 3.82l1.162-1.146a1 1 0 011.11-.164l2.436 1.218c.339.174.553.513.553.894V12.5A1.5 1.5 0 0113.5 14C6.596 14 1 8.404 1 1.5v-1A.5.5 0 012 0v2.5z" stroke="currentColor" stroke-width="1.2" fill="none"/>
							</svg>
							<span class="font-mono text-xs">{$t.contact.phone}</span>
						</a>
					</div>

					<!-- Location -->
					<div>
						<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Location</p>
						<div class="flex items-center gap-2 text-sm" style="color: var(--c-text-secondary);">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-amber-400 flex-shrink-0">
								<circle cx="7" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.2"/>
								<path d="M2 5.5C2 2.739 4.239 1 7 1s5 1.739 5 4.5C12 9.5 7 13 7 13S2 9.5 2 5.5z" stroke="currentColor" stroke-width="1.2"/>
							</svg>
							<span class="text-xs">{$t.contact.location}</span>
						</div>
					</div>
				</div>

				<!-- Divider -->
				<div class="flex items-center gap-4 mb-8">
					<div class="flex-1 h-px" style="background: var(--c-border);"></div>
					<span class="text-xs" style="color: var(--c-text-faint);">{$t.contact.or}</span>
					<div class="flex-1 h-px" style="background: var(--c-border);"></div>
				</div>

				<!-- Social links -->
				<div class="flex flex-wrap justify-center gap-4">
					{#each socialLinks as social (social.name)}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="social-link flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 glass-hover"
							style="color: {social.color};"
						>
							{@html social.icon}
							{social.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- GitHub note: solo se publican algunos proyectos (copyright) -->
				<p
					class="mb-6 flex items-start justify-center gap-2 text-center text-xs"
					style="color: var(--c-text-faint); opacity: {visible ? 1 : 0}; transition: opacity 0.6s ease 0.25s;"
				>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="mt-px flex-shrink-0 text-slate-500" aria-hidden="true">
						<circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2"/>
						<path d="M7 6.2V10M7 4v.01" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
					</svg>
					<span>{$t.contact.github_note}</span>
				</p>

				<!-- Bottom note -->
			<p class="text-center text-xs"
				style="color: var(--c-text-faint); opacity: {visible ? 1 : 0}; transition: opacity 0.6s ease 0.3s;"
			>
				Colombia · Disponible para proyectos remotos e internacionales
			</p>
		</div>
	</div>
</section>

<style>
	.social-link {
		background: var(--c-glass-bg);
		border: 1px solid var(--c-border-strong);
	}
</style>
