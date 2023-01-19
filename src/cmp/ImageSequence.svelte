<script lang="ts">
	import type { LookingDirection } from '@/types'
	import Image from '@/cmp/Image.svelte'

	export let direction: LookingDirection = 'center'
</script>

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
