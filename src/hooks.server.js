import * as Sentry from '@sentry/svelte';
import { sentryConfig } from '$lib/config/public';

Sentry.init(sentryConfig);

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
	// example integration with https://sentry.io/
	Sentry.captureException(error, { event });

	return {
		message: 'Whoops!',
		code: error?.code ?? 'UNKNOWN'
	};
}
