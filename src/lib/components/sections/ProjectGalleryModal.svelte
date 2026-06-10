<script>
	import { t } from '$lib/i18n/index.js';
	import GalleryProjectCard from './GalleryProjectCard.svelte';
	import ImageCarousel from '$lib/components/ui/ImageCarousel.svelte';
	import { getProjectImages, galleryPlaceholder } from '$lib/utils/gallery.js';

	let { open = $bindable(false) } = $props();

	/** @type {null | { id: string, title: string, desc: string }} */
	let lightboxItem = $state(null);
	let lightboxIndex = $state(0);

	const closeModal = () => {
		open = false;
		lightboxItem = null;
		lightboxIndex = 0;
	};

	const openLightbox = (item, startIndex = 0) => {
		lightboxItem = item;
		lightboxIndex = startIndex;
	};

	const closeLightbox = () => {
		lightboxItem = null;
	};

	const handleKeydown = (e) => {
		if (e.key === 'Escape') {
			if (lightboxItem) closeLightbox();
			else closeModal();
			return;
		}

		if (!lightboxItem) return;

		const images = getProjectImages(lightboxItem.id);
		if (images.length <= 1) return;

		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			lightboxIndex = (lightboxIndex - 1 + images.length) % images.length;
		}

		if (e.key === 'ArrowRight') {
			e.preventDefault();
			lightboxIndex = (lightboxIndex + 1) % images.length;
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		class="modal-backdrop"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="dialog"
		aria-modal="true"
		aria-label={$t.gallery.title}
		tabindex="-1"
	>
		<div class="modal-panel" onclick={(e) => e.stopPropagation()} role="presentation">
			<div class="modal-header">
				<div>
					<h2 class="modal-title">{$t.gallery.title}</h2>
					<p class="modal-subtitle">{$t.gallery.subtitle}</p>
				</div>
				<button class="close-btn" onclick={closeModal} aria-label={$t.gallery.close}>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
					</svg>
				</button>
			</div>

			<div class="modal-grid">
				{#each $t.gallery.items as item (item.id)}
					<GalleryProjectCard
						{item}
						capturesLabel={$t.gallery.captures}
						expandLabel={$t.gallery.click_to_expand}
						onexpand={(index) => openLightbox(item, index)}
					/>
				{/each}
			</div>
		</div>
	</div>
{/if}

{#if lightboxItem}
	{@const images = getProjectImages(lightboxItem.id)}
	<div
		class="lightbox"
		onclick={closeLightbox}
		onkeydown={(e) => e.key === 'Escape' && closeLightbox()}
		role="dialog"
		aria-modal="true"
		aria-label={lightboxItem.title}
		tabindex="-1"
	>
		<button class="lightbox-close" onclick={closeLightbox} aria-label={$t.gallery.close}>
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
				<path d="M3 3l16 16M19 3L3 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
			</svg>
		</button>

		<div class="lightbox-inner" onclick={(e) => e.stopPropagation()} role="presentation">
			<ImageCarousel
				{images}
				alt={lightboxItem.title}
				variant="lightbox"
				reloadOnChange={true}
				placeholder={galleryPlaceholder(lightboxItem.id)}
				bind:currentIndex={lightboxIndex}
			/>

			<div class="lightbox-caption">
				<span class="lightbox-title">{lightboxItem.title}</span>
				<span class="lightbox-desc">{lightboxItem.desc}</span>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 9000;
		background: rgba(0, 0, 0, 0.72);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 16px;
		overflow-y: auto;
		animation: fade-in 0.2s ease;
	}

	.modal-panel {
		width: 100%;
		max-width: 1100px;
		background: var(--c-surface);
		border: 1px solid var(--c-border-strong);
		border-radius: 20px;
		overflow: hidden;
		margin: auto;
		animation: slide-up 0.25s ease;
	}

	.modal-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 16px;
		padding: 24px 28px 20px;
		border-bottom: 1px solid var(--c-border);
		position: sticky;
		top: 0;
		background: var(--c-surface);
		z-index: 2;
	}

	.modal-title {
		font-size: 18px;
		font-weight: 700;
		color: var(--c-text-primary);
		margin: 0 0 3px;
	}

	.modal-subtitle {
		font-size: 13px;
		color: var(--c-text-muted);
		margin: 0;
	}

	.close-btn {
		flex-shrink: 0;
		width: 36px;
		height: 36px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--c-glass-bg);
		border: 1px solid var(--c-border-strong);
		color: var(--c-text-muted);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.close-btn:hover {
		background: var(--c-glass-hover);
		color: var(--c-text-primary);
	}

	.modal-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 16px;
		padding: 24px 28px 28px;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 9100;
		background: rgba(0, 0, 0, 0.95);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		animation: fade-in 0.15s ease;
	}

	.lightbox-close {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.15);
		color: white;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 10;
	}

	.lightbox-close:hover {
		background: rgba(255, 255, 255, 0.18);
	}

	.lightbox-inner {
		width: min(1200px, 95vw);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.lightbox-caption {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}

	.lightbox-title {
		font-size: 15px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
	}

	.lightbox-desc {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.5);
		text-align: center;
		max-width: 600px;
	}

	@keyframes fade-in {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slide-up {
		from { opacity: 0; transform: translateY(20px); }
		to { opacity: 1; transform: translateY(0); }
	}

	@media (max-width: 640px) {
		.modal-backdrop { padding: 0; align-items: flex-start; }
		.modal-panel { border-radius: 0; min-height: 100dvh; }
		.modal-grid { grid-template-columns: 1fr 1fr; gap: 12px; padding: 16px; }
		.modal-header { padding: 16px; }
	}
</style>
