<script>
	let { variant = 'default', children } = $props();

	const classes = {
		default: 'badge',
		cyan: 'badge badge-cyan',
		green: 'badge badge-green'
	};
</script>

<span class={classes[variant] || classes.default}>
	{@render children?.()}
</span>
