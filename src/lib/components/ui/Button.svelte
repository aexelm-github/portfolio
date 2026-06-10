<script>
	let {
		variant = 'primary',
		href = null,
		target = null,
		onclick = null,
		children
	} = $props();
</script>

{#if href}
	<a
		{href}
		{target}
		class={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	>
		{@render children?.()}
	</a>
{:else}
	<button {onclick} class={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}>
		{@render children?.()}
	</button>
{/if}
