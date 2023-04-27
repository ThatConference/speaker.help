import * as Sentry from '@sentry/svelte';
import { sentryConfig } from '$lib/config/public';

Sentry.init(sentryConfig);

export async function load() {
	return {};
}
