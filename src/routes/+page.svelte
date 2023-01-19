<script lang="ts">
	import Image from '@/cmp/Image.svelte'
	import ImageSequence from '@/cmp/ImageSequence.svelte'
	import Input from '@/cmp/Input.svelte'
	import MouseMonitor from '@/cmp/MouseMonitor.svelte'
	import { lookingDirection } from '@/store'
	import type { LookingDirection } from '@/types'

	let x: number
	let y: number

	const handleMouseMove = (e: MouseEvent) => {
		x = e.clientX
		y = e.clientY
	}

	let direction: LookingDirection = 'center'

	lookingDirection.subscribe((value) => (direction = value))
</script>

<div on:mousemove={handleMouseMove} class="h-screen relative">
	{#if x && y}
		<MouseMonitor {x} {y} />
	{/if}
	<ImageSequence {direction} />
</div>
