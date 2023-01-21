<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { started } from '@/store'

	let backgroundMusic: HTMLAudioElement

	onMount(() => {
		backgroundMusic = new Audio('/sounds/music.mp3')
		started.subscribe((start) => {
			if (start) {
				backgroundMusic.loop = true
				backgroundMusic.play()
			}
		})
	})

	onDestroy(() => {
		if (backgroundMusic) {
			backgroundMusic.pause()
		}
	})
</script>
