<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	let testAvatarImg =
		'https://that.imgix.net/members/ac027232-c21a-4ead-8ec4-b7103e5265b9.jpeg?mask=ellipse&w=500&h=500&fit=crop';
	let testDesc = `Hi, I'm Clark. I'm on my 47th trip around the sun, having lived my entire life along the IL/WI border. I'm married to my best friend, fantastic wife, and business partner, and we share the joys of raising two kids, Ethan (16) and Addison (14).\n

		Historically trained software developer, architect, and product manager, I've managed to fool companies such as Allstate, Microsoft, and Telerik to let this crazy passionate, entrepreneurial, "see only limitless opportunities" of a person work for them. My wife and I have founded two companies, THAT Conference and Unspecified.

		I fell backward into software development because computers help people scale. It's my love for people and helping one another that's led me to a life of building products that build communities. It's my mission to create software that connects people in a more profound and meaningful way.

		Today, THAT Conference is one of the largest Family Friendly Technology Conferences. During the pandemic, we created a SAAS platform to connect geeks across the globe. Unspecified is our boutique software development company. We use our extensive enterprise application skills and help small businesses build software to improve their business.

		Regardless of titles, I will always call myself a practitioner.`;
</script>

<div>
	<div class="card">
		<header class="py-4 card-header">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<Avatar src={testAvatarImg} width="w-16" rounded="rounded-full" />
					<h3 class="font-heading-token text-9xl font-bold uppercase">Clark Sell</h3>
				</div>

				<div>Wednesday April 12th, 9:00 AM</div>
			</div>
		</header>

		<section class="!border-t-2 p-8 border-surface-500/50">
			<div class="flex flex-col space-y-4">
				<div class="font-heading-token text-xl font-bold">
					I just created a new speaker bio and I would love a few eyes on it for review.
				</div>
				<p class="lineBreaks line-clamp-4">{testDesc}</p>
			</div>
		</section>
		<footer class="card-footer">
			<div class="flex justify-between">
				<div class="flex space-x-4">
					<div>
						<span class="chip variant-soft hover:variant-filled">
							<span>(icon wtih # in it)</span>
							<span>Comments</span>
						</span>
					</div>
					<div>
						<span class="chip variant-soft hover:variant-filled">
							<span>(icon)</span>
							<span>Action</span>
						</span>
					</div>
				</div>

				<div>
					<span class="chip variant-soft hover:variant-filled">
						<span>(icon)</span>
						<span>Share</span>
					</span>
				</div>
			</div>
		</footer>
	</div>
</div>
