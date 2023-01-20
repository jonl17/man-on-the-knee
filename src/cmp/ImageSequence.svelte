<script lang="ts">
	import type { LookingDirection } from '@/types'
	import Image from '@/cmp/Image.svelte'
	import Input from './Input.svelte'
	import PantsDraggablePart from './PantsDraggablePart.svelte'
	import PantsSleeve from './PantsSleeve.svelte'

	export let direction: LookingDirection = 'center'

	// for preloading images
	const imageFilenames = [
		'base-paint.png',
		'base.png',
		'head-center-paint.png',
		'head-center.png',
		'head-down-paint.png',
		'head-down.png',
		'head-left-paint.png',
		'head-left.png',
		'head-right-paint.png',
		'head-right.png',
		'pants-draggable-part.png',
		'pants-paint.png',
		'pants.png'
	]
</script>

<svelte:head>
	{#each imageFilenames as filename}
		<link rel="preload" as="image" href="/pics/{filename}" />
	{/each}
</svelte:head>

<section class="grid place-items-center h-full w-full">
	<div class="w-full h-[400px] md:w-[750px] md:h-[700px] lg:w-[1000px] lg:h-[900px] relative">
		<!-- the base body and paint -->
		<Image src="/pics/base-paint.png" />
		<Image src="/pics/base.png" />

		<!-- the head and head paint are conditionally rendered -->
		{#if direction === 'left'}
			<Image src="/pics/head-left-paint.png" />
			<Image src="/pics/head-left.png" />
			<Image src="/pics/knee-face-eyes-3.png" />
		{:else if direction === 'right'}
			<Image src="/pics/head-right-paint.png" />
			<Image src="/pics/head-right.png" />
			<Image src="/pics/knee-face-eyes-2.png" />
		{:else if direction === 'down'}
			<Image transitionConfig={{ duration: 300 }} src="/pics/head-down-paint.png" />
			<Image src="/pics/head-down.png" />
			<Image src="/pics/knee-face-eyes-closed.png" />
		{:else}
			<!-- fallback/default direction is center -->
			<Image src="/pics/head-center-paint.png" />
			<Image src="/pics/head-center.png" />
			<Image src="/pics/knee-face-eyes.png" />
		{/if}

		<!-- pants that roll up -->
		<!-- desktop -->
		<PantsSleeve clipPercentageRange={{ min: 28, max: 50 }} className="hidden lg:block" />
		<!-- tablet -->
		<PantsSleeve clipPercentageRange={{ min: 30, max: 47 }} className="hidden md:block lg:hidden" />
		<!-- mobile -->
		<PantsSleeve clipPercentageRange={{ min: 25, max: 48 }} className="block md:hidden" />

		<!-- desktop -->
		<PantsDraggablePart capX={3} capY={187} className="hidden lg:block" />
		<!-- tablet -->
		<PantsDraggablePart capX={3} capY={137} className="hidden md:block lg:hidden" />
		<!-- mobile -->
		<PantsDraggablePart capX={2} capY={95} className="block md:hidden" />

		<Input />
	</div>
</section>
