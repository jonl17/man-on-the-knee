<script lang="ts">
	import { fade } from 'svelte/transition'
	import cn from 'classnames'

	export let src = ''
	export let transitionConfig = { duration: 100 }
	export let coords = { x: 0, y: 0 }
	export let className = ''
	export let style = ''
</script>

<img
	transition:fade={transitionConfig}
	class={cn(
		'h-full w-full object-contain absolute top-0 left-0 bg-transparent pointer-events-none',
		className
	)}
	{src}
	alt={src}
	style={`transform: translateX(${coords.x}px) translateY(${coords.y}px); ${style}`}
/>
