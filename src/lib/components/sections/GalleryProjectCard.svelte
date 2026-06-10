<script>
	import ImageCarousel from '$lib/components/ui/ImageCarousel.svelte';
	import { getProjectImages, galleryPlaceholder } from '$lib/utils/gallery.js';

	let { item, capturesLabel, expandLabel, onexpand } = $props();

	let currentIndex = $state(0);
	const images = $derived(getProjectImages(item.id));
</script>

<button
	class="gallery-card"
	onclick={() => onexpand?.(currentIndex)}
	title={expandLabel}
	type="button"
>
	<div class="card-image-wrap">
		<ImageCarousel
			{images}
			alt={item.title}
			variant="card"
			placeholder={galleryPlaceholder(item.id)}
			bind:currentIndex
		/>

		<div class="card-overlay">
			<svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="expand-icon">
				<rect x="1" y="1" width="13" height="13" rx="3" stroke="white" stroke-width="1.5"/>
				<rect x="18" y="1" width="13" height="13" rx="3" stroke="white" stroke-width="1.5"/>
				<rect x="1" y="18" width="13" height="13" rx="3" stroke="white" stroke-width="1.5"/>
				<rect x="18" y="18" width="13" height="13" rx="3" stroke="white" stroke-width="1.5"/>
			</svg>
		</div>
	</div>

	<div class="card-info">
		<h3 class="card-title">{item.title}</h3>
		<p class="card-desc">{item.desc}</p>
		{#if images.length > 1}
			<p class="card-count">{images.length} {capturesLabel}</p>
		{/if}
	</div>
</button>

<style>
	.gallery-card {
		border-radius: 14px;
		overflow: hidden;
		background: var(--c-surface-2);
		border: 1px solid var(--c-border);
		cursor: pointer;
		text-align: left;
		transition: all 0.25s ease;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.gallery-card:hover {
		border-color: rgba(99, 102, 241, 0.35);
		transform: translateY(-3px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
	}

	.card-image-wrap {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: var(--c-surface-3);
	}

	.card-image-wrap :global(.carousel),
	.card-image-wrap :global(.carousel-viewport) {
		height: 100%;
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.25s ease;
		pointer-events: none;
	}

	.gallery-card:hover .card-overlay {
		background: rgba(0, 0, 0, 0.35);
	}

	.expand-icon {
		opacity: 0;
		transform: scale(0.8);
		transition: all 0.2s ease;
	}

	.gallery-card:hover .expand-icon {
		opacity: 1;
		transform: scale(1);
	}

	.card-info {
		padding: 14px 16px;
		flex: 1;
	}

	.card-title {
		font-size: 13px;
		font-weight: 600;
		color: var(--c-text-primary);
		margin: 0 0 5px;
	}

	.card-desc {
		font-size: 12px;
		color: var(--c-text-muted);
		line-height: 1.5;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-count {
		margin: 8px 0 0;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: #818cf8;
	}
</style>
