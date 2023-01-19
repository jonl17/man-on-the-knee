<script lang="ts">
	import { lookingDirection } from '@/store'

	export let x: number
	export let y: number

	$: lookingDirection.update(() => {
		if (x <= window.innerWidth * 0.25) {
			return 'left'
		} else if (x >= window.innerWidth * 0.75) {
			return 'right'
		} else return 'center'
	})
</script>

<div class="absolute top-3 left-3 h-24 p-3">
	<p>{$lookingDirection}</p>
	<p>
		{`x: ${x}`}
	</p>
	<p>
		{`y: ${y}`}
	</p>
</div>
