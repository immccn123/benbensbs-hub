<script>
	import PageTitle from "$lib/components/PageTitle.svelte";

	const tools = [
		{
			name: "洛谷笑传之猜猜犇",
			description:
				"By EarthMessenger，人力 vibe 了一下午从 Next.js 那边移植过来。",
			link: "/ccb",
		},
	];
</script>

<section class="px-6 py-10">
	<PageTitle title="神奇工具一览表" />
	<div class="grid gap-6 md:grid-cols-2">
		{#each tools as tool}
			<div
				class="border border-primary bg-white shadow-[4px_4px_0_rgba(0,0,0,0.2)] p-6 rounded-xl"
			>
				<h3 class="text-xl font-semibold text-primary mb-1">
					{tool.name}
				</h3>
				<p class="text-sm text-gray-700 mb-4">{tool.description}</p>
				<a
					href={tool.link}
					class="inline-block px-4 py-1 text-sm border border-primary rounded-full hover:bg-primary hover:text-white transition"
				>
					进入 →
				</a>
			</div>
		{/each}
	</div>
</section>
