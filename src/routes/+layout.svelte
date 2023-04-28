<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { navigating } from '$app/stores';
	import Preloading from '$components/Preloading.svelte';
	import Footer from '$components/Footer.svelte';
	import TopNav from '$components/TopNav.svelte';

	//todo: do we need to worry about how to load???
</script>

{#if $navigating}
	<Preloading />
{/if}

<AppShell>
	<svelte:fragment slot="header">
		<TopNav />
	</svelte:fragment>

	<!-- Router Slot -->
	<main>
		<slot />
	</main>

	<svelte:fragment slot="pageFooter">
		<footer class="mt-8">
			<Footer />
		</footer>
	</svelte:fragment>
</AppShell>
