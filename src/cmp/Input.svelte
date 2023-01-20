<script type="ts">
	import { lookingDirection, pantsDragValue } from '@/store'
	const handleDown = () => lookingDirection.update(() => 'down')
	const handleUp = () => lookingDirection.update(() => 'center')
</script>

<input
	on:mousedown={handleDown}
	on:mouseup={handleUp}
	bind:value={$pantsDragValue}
	type="range"
	min="0"
	max="10"
	class="opacity-0 hover:cursor-pointer absolute h-3 w-[120px] origin-right rotate-90 bottom-[23%] right-[45%] sm:right-[46.2%] sm:bottom-[20%] md:bottom-[190px] md:w-[150px] md:right-[335px] lg:w-[200px] lg:bottom-[240px] lg:right-[445px]"
/>
