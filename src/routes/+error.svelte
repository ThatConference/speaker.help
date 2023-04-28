<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import * as Sentry from '@sentry/svelte';

	
	if (!dev) {
		Sentry.captureException(new Error($page.error?.message));
	}

	//todo:: we seem to be missing the error stack
</script>

<p>
	{#if $page.status === 404}
		{#if $page.error?.message}
			{$page.error.message}
		{:else}
			THAT Page not found
		{/if}
	{:else}
		Well THAT's No Good.
	{/if}
</p>

<p>
	{#if $page.status === 404}
		Please check the URL in the address bar and try again.
	{:else}
		Well that's no good. We've notified the geeks and logged the error.
	{/if}
</p>

