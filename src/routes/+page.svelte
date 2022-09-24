<script lang="ts">
	import TwitchVerify from "$lib/components/TwitchVerify.svelte";
	import type { PageData } from './$types';

	export let data: PageData;

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<TwitchVerify />
	<pre>{JSON.stringify(data, null, 2)}</pre>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
