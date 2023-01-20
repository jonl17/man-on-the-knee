<script lang="ts">
	import { fade } from 'svelte/transition'

	export let src = ''
	export let transitionConfig = { duration: 100 }
	export let coords = { x: 0, y: 0 }
</script>

<img
	transition:fade={transitionConfig}
	class="h-full w-full object-contain absolute top-0 left-0 bg-transparent pointer-events-none"
	{src}
	alt={src}
	style={`transform: translateX(${coords.x}px) translateY(${coords.y}px)`}
/>
