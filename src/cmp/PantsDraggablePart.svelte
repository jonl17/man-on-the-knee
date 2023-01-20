<script>
	import Image from './Image.svelte'
	import { pantsDragValue } from '@/store'

	export let capX = 0
	export let capY = 0

	export let className = ''

	$: pantsPosition = {
		x: capX - capX * ($pantsDragValue * 0.1),
		y: -capY + capY * ($pantsDragValue * 0.1)
	}
</script>

<span class={className}>
	<Image coords={pantsPosition} src="/pics/pants-draggable-part.png" />
</span>
