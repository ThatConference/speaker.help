<script>
	import Post from '$components/Post.svelte';

	const posts = new Array(10);
</script>

<div class="mt-24 flex justify-center items-center">
	<div>
		<h1>I NEED SOME DAMN HELP</h1>
	</div>
</div>

<div class="section-container">
	<div class="flex flex-col space-y-12">
		{#each posts as post}
			<Post />
		{/each}
	</div>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
</style>
