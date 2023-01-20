<script lang="ts">
	import { onMount } from 'svelte'
	import { started } from '@/store'

	onMount(() => {
		const backgroundMusic = new Audio('/sounds/music.mp3')
		started.subscribe((start) => {
			if (start) {
				backgroundMusic.loop = true
				backgroundMusic.play()
			}
		})
	})
</script>
