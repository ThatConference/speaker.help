<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { navigating } from '$app/stores';
	import Preloading from '$components/Preloading.svelte';

	//todo: do we need to worry about how to load???
</script>

{#if $navigating}
	<Preloading />
{/if}

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>

	<!-- Router Slot -->
	<main>
		<slot />
	</main>

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>
