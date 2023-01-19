<script>
	import { fade } from 'svelte/transition'

	export let src = ''
	export let transitionConfig = { duration: 100 }
</script>

<img
	transition:fade={transitionConfig}
	class="h-full w-full object-contain absolute top-0 left-0 bg-transparent"
	{src}
	alt={src}
/>
