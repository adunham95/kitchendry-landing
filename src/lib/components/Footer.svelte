<script lang="ts">
	import { navigation } from '$lib/data/NavLinks';
</script>

<footer class="bg-surface" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-4">
				<img class="h-9" src="/brand/icon-wide.png" alt="Company name" />
				<p class="text-tc-2 text-sm leading-6">
					Inspire and enable individuals to explore, experiment, and redefine the world of cooking
				</p>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-tc-1 text-sm font-semibold leading-6">Solutions</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each navigation.solutions as item}
								<li>
									<a href={item.href} class="text-tc-3 hover:text-tc-1 text-sm leading-6">
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-tc-1 text-sm font-semibold leading-6">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each navigation.support as item}
								<li>
									<a href={item.href} class="text-tc-3 hover:text-tc-1 text-sm leading-6">
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-tc-1 text-sm font-semibold leading-6">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each navigation.company as item}
								<li>
									<a href={item.href} class="text-tc-3 hover:text-tc-1 text-sm leading-6">
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-tc-1 text-sm font-semibold leading-6">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each navigation.legal as item}
								<li>
									<a href={item.href} class="text-tc-3 hover:text-tc-1 text-sm leading-6">
										{item.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="border-surface-5/10 mt-8 border-t pt-8 md:flex md:items-center md:justify-between">
			<p class="text-tc-3 mt-8 text-xs leading-5 md:order-1 md:mt-0">
				&copy;{new Date().getFullYear()} Kitchendry, LLC. All rights reserved.
			</p>
		</div>
	</div>
</footer>
