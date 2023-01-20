<script>
	import Image from './Image.svelte'
	import { pantsDragValue } from '@/store'

	export let className = ''

	export let clipPercentageRange = {
		min: 30,
		max: 47
	}

	const rangeSpan = clipPercentageRange.max - clipPercentageRange.min
	const startPercentage = clipPercentageRange.min
	$: multiplier = (10 - $pantsDragValue) * 0.1
	$: clip = startPercentage + rangeSpan * multiplier
</script>

<Image {className} style="clip-path: inset({clip}% 0%)" src="/pics/pants-paint.png" />
<Image {className} style="clip-path: inset({clip}% 0%)" src="/pics/pants.png" />
