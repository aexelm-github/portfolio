<script>
	let { children } = $props();
</script>

<div class="section-label">
	<span class="w-6 h-px bg-indigo-500 inline-block"></span>
	{@render children?.()}
</div>
