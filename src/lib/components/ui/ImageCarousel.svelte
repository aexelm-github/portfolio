<script>
	let {
		images = [],
		alt = '',
		variant = 'card',
		placeholder = '',
		reloadOnChange = false,
		currentIndex = $bindable(0)
	} = $props();

	let reloadToken = $state(Date.now());

	const total = $derived(Math.max(images.length, 1));
	const safeIndex = $derived(
		images.length === 0 ? 0 : Math.min(currentIndex, images.length - 1)
	);

	const currentSrc = $derived.by(() => {
		if (images.length === 0) return placeholder;
		const src = images[safeIndex];
		if (!src) return placeholder;
		return reloadOnChange ? `${src}?t=${reloadToken}` : src;
	});

	const goTo = (index, event) => {
		event?.stopPropagation();
		if (images.length <= 1) return;
		currentIndex = (index + images.length) % images.length;
		if (reloadOnChange) reloadToken = Date.now();
	};

	const prev = (event) => goTo(safeIndex - 1, event);
	const next = (event) => goTo(safeIndex + 1, event);

	$effect(() => {
		if (images.length > 0 && currentIndex >= images.length) {
			currentIndex = images.length - 1;
		}
	});
</script>

<div class="carousel" class:carousel-lightbox={variant === 'lightbox'} class:carousel-card={variant === 'card'}>
	<div class="carousel-viewport">
		{#key reloadOnChange ? `${safeIndex}-${reloadToken}` : safeIndex}
			<img
				src={currentSrc}
				{alt}
				class="carousel-img"
				loading="lazy"
				onerror={(e) => {
					if (placeholder) e.currentTarget.src = placeholder;
				}}
			/>
		{/key}

		{#if images.length > 1}
			<button type="button" class="nav nav-prev" onclick={prev} aria-label="Previous">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
			<button type="button" class="nav nav-next" onclick={next} aria-label="Next">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		{/if}
	</div>

	{#if images.length > 1}
		<div class="carousel-meta">
			<div class="dots" role="tablist" aria-label="Slides">
				{#each images as _, i (i)}
					<button
						type="button"
						class="dot"
						class:active={i === safeIndex}
						onclick={(e) => goTo(i, e)}
						aria-label={`Slide ${i + 1}`}
						aria-current={i === safeIndex ? 'true' : undefined}
					></button>
				{/each}
			</div>
			<span class="counter">{safeIndex + 1} / {images.length}</span>
		</div>
	{/if}
</div>

<style>
	.carousel {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.carousel-viewport {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: hidden;
		background: var(--c-surface-3, #14141e);
	}

	.carousel-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.carousel-lightbox .carousel-img {
		object-fit: contain;
		max-height: 75vh;
		height: auto;
		width: auto;
		max-width: 100%;
		margin: 0 auto;
	}

	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 32px;
		height: 32px;
		border-radius: 9999px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		background: rgba(0, 0, 0, 0.45);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s ease, background 0.2s ease;
		z-index: 2;
	}

	.carousel:hover .nav,
	.carousel-lightbox .nav {
		opacity: 1;
	}

	.nav:hover {
		background: rgba(0, 0, 0, 0.65);
	}

	.nav-prev { left: 8px; }
	.nav-next { right: 8px; }

	.carousel-lightbox .nav {
		width: 42px;
		height: 42px;
		background: rgba(255, 255, 255, 0.08);
	}

	.carousel-lightbox .nav-prev { left: 12px; }
	.carousel-lightbox .nav-next { right: 12px; }

	.carousel-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 8px 10px 0;
	}

	.carousel-card .carousel-meta {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 24px 10px 8px;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent);
	}

	.dots {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 9999px;
		border: none;
		padding: 0;
		background: rgba(255, 255, 255, 0.35);
		cursor: pointer;
		transition: transform 0.2s ease, background 0.2s ease;
	}

	.dot.active {
		background: #818cf8;
		transform: scale(1.25);
	}

	.counter {
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.04em;
		color: rgba(255, 255, 255, 0.75);
		font-variant-numeric: tabular-nums;
		flex-shrink: 0;
	}

	.carousel-lightbox .carousel-meta {
		justify-content: center;
		padding-top: 12px;
	}

	.carousel-lightbox .counter {
		color: rgba(255, 255, 255, 0.55);
		font-size: 12px;
	}

	.carousel-lightbox .carousel-viewport {
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
	}
</style>
