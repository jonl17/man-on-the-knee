<script lang="ts">
	import { lookingDirection } from '@/store'

	export let x: number
	export let y: number

	$: lookingDirection.update((value) => {
		if (value !== 'down') {
			if (x <= window.innerWidth * 0.25) {
				return 'left'
			} else if (x >= window.innerWidth * 0.75) {
				return 'right'
			} else return 'center'
		}
		return 'down'
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
