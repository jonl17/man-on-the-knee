<script lang="ts">
	import ImageSequence from '@/cmp/ImageSequence.svelte'
	import MouseMonitor from '@/cmp/MouseMonitor.svelte'
	import Sounds from '@/cmp/Sounds.svelte'
	import { lookingDirection, started } from '@/store'
	import type { LookingDirection } from '@/types'
	import { fade } from 'svelte/transition'

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
		<MouseMonitor {x} />
	{/if}
	<ImageSequence {direction} />

	<Sounds />
</div>

{#if !$started}
	<button
		on:click={() => started.update(() => true)}
		out:fade
		class="h-screen w-full bg-black top-0 left-0 absolute"
	>
		<h1 class="text-white text-7xl">start</h1>
	</button>
{/if}
