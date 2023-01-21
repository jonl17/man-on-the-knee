<script lang="ts">
	import { lookingDirection } from '@/store'

	export let x: number

	$: lookingDirection.update((value) => {
		if (value !== 'down') {
			if (x <= window.innerWidth * 0.35) {
				return 'left'
			} else if (x >= window.innerWidth * 0.65) {
				return 'right'
			} else return 'center'
		}
		return 'down'
	})
</script>
