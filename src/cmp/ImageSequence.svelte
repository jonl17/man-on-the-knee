<script lang="ts">
	import type { LookingDirection } from '@/types'
	import Image from '@/cmp/Image.svelte'

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
		{:else}
			<!-- fallback/default direction is center -->
			<Image src="/pics/head-center-paint.png" />
			<Image src="/pics/head-center.png" />
		{/if}

		<input
			type="range"
			class="absolute h-3 bg-red-700 w-[120px] md:w-[140px] lg:w-[190px] origin-right rotate-90 bottom-[22%] sm:bottom-[20%] right-[45%] sm:right-[46.2%] md:bottom-[155px] md:right-[290px] lg:bottom-[200px] lg:right-[400px]"
		/>
	</div>
</section>
