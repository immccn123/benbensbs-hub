<script lang="ts">
	import "../app.css";

	let { children } = $props();
</script>

<main
	class="min-h-screen bg-background text-primary-dark font-['serif'] tracking-tight"
>
	<header
		class="bg-background text-primary-dark font-mono tracking-tight border-b border-primary px-6 py-4"
	>
		<h1 class="text-3xl sm:text-4xl font-bold text-primary">
			<a href="/">Benben Hub</a>
		</h1>
		<p class="text-xs sm:text-sm italic mt-1">
			从社区偷的东西 <a class="underline" href="/">主页</a>
			<a class="underline" href="https://benben.sbs">返回主站</a>
		</p>
	</header>

	{@render children()}
</main>
