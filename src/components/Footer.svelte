<script>
	import dayjs from 'dayjs';
	import { version } from '$app/environment';
</script>

<div class="bg-surface-100-800-token">
	<div class="lg:container lg:mx-auto px-4 py-8">
		<div class="flex justify-between">
			<div class="flex flex-col items-start space-y-4">
				<img class="h-12" src="/images/that-logo-full-wide.svg" alt="that logo" />
				<div>
					<p>A place for people to help one another.</p>
					<p>Powered by THAT Labs</p>
				</div>
				<p>
					<a href="https://that.us" target="_blank" rel="noreferrer">THAT</a>
					<span class="opacity-10 mx-2">|</span>
					<a href="https://thatconference.com" target="_blank" rel="noreferrer">THAT Conference</a>
				</p>
			</div>

			<div>links</div>
		</div>
		<div class="mt-4 !border-t-2 border-surface-500/50">
			<div class="pt-8">
				<p class="text-center">
					&copy; {dayjs().format('YYYY')} THAT&reg; All rights reserved.<br />
					<em>v{version}</em>
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	a {
		@apply !no-underline;
	}
</style>
