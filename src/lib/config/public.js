import { env } from '$env/dynamic/public';
import { version } from '$app/environment';

/**
 * @param {string} configKey
 */
function configMissing(configKey) {
	const message = `Missing required public environment varable: ${configKey}`;
	throw new Error(message);
}

const defaultConfig = {
	env: env.PUBLIC_NODE_ENV || env.PUBLIC_VERCEL_ENV || 'production',
	api: {
		cache: 'https://that.graphcdn.app/',
		direct: env.PUBLIC_THAT_API || configMissing('PUBLIC_THAT_API')
	},
	images: {
		ogImageApi: env.PUBLIC_THAT_OG_IMAGE_API || 'https://og-image.that.tech/og-image',
		profileImageApi: 'https://fn.that.tech/profile',
		defaultProfileImage:
			'https://images.that.tech/members/person-placeholder.jpg?auto=format&fit=facearea&facepad=10&mask=ellipse&h=250&w=250&q=50&dpr=2'
	}
};

export const logging = {
	sentryDsn:
		env.PUBLIC_SENTRY_DSN ||
		'https://15d4b436dc0a4366a0ac388c65772926@o235190.ingest.sentry.io/5357492'
};

export const sentryConfig = {
	dsn: logging.sentryDsn,
	release: version ?? 'not-set',
	environment: defaultConfig.env,
	debug: false,
	attachStacktrace: true,
	normalizeDepth: 6
};

export default defaultConfig;
