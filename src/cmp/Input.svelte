<script>
	import { lookingDirection } from '@/store'

	const handleDown = () => lookingDirection.update(() => 'down')
	const handleUp = () => lookingDirection.update(() => 'center')
</script>

<input
	on:mousedown={handleDown}
	on:mouseup={handleUp}
	type="range"
	class="absolute h-3 w-[120px] md:w-[140px] lg:w-[190px] origin-right rotate-90 bottom-[22%] sm:bottom-[20%] right-[45%] sm:right-[46.2%] md:bottom-[155px] md:right-[290px] lg:bottom-[200px] lg:right-[400px]"
/>
