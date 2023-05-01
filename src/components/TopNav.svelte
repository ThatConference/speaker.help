<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="pl-4">
			<img class="h-12" src="/images/speaker-help-icon-red-right.svg" alt="WebSite Logo" />
		</div>
	</svelte:fragment>

	<h2 class="-ml-2">Speaker Help</h2>

	<svelte:fragment slot="trail">
		<div class="flex space-x-4 pr-4">
			<img class="h-12" src="/images/speaker-help-icon-red.svg" alt="WebSite Logo" />
			<img class="h-12" src="/images/speaker-help-icon-red.svg" alt="WebSite Logo" />
			<img class="h-12" src="/images/speaker-help-icon-red.svg" alt="WebSite Logo" />
		</div>
	</svelte:fragment>
</AppBar>
