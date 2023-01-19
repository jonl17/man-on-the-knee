<script lang="ts">
	import type { LookingDirection } from '@/types'
	import Image from '@/cmp/Image.svelte'
	import Input from './Input.svelte'

	export let direction: LookingDirection = 'center'
</script>

<section class="grid place-items-center h-full w-full">
	<div class="w-full h-[400px] md:w-[650px] md:h-[600px] lg:w-[900px] lg:h-[800px] border relative">
		<!-- the base body and paint -->
		<Image src="/pics/base-paint.png" />
		<Image src="/pics/base.png" />

		<!-- the head and head paint are conditionally rendered -->
		{#if direction === 'left'}
			<Image src="/pics/head-left-paint.png" />
			<Image src="/pics/head-left.png" />
		{:else if direction === 'right'}
			<Image src="/pics/head-right-paint.png" />
			<Image src="/pics/head-right.png" />
		{:else if direction === 'down'}
			<Image transitionConfig={{ duration: 300 }} src="/pics/head-down-paint.png" />
			<Image src="/pics/head-down.png" />
		{:else}
			<!-- fallback/default direction is center -->
			<Image src="/pics/head-center-paint.png" />
			<Image src="/pics/head-center.png" />
		{/if}

		<Input />
	</div>
</section>
