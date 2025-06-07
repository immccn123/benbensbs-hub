<script lang="ts">
	import PageTitle from "$lib/components/PageTitle.svelte";
</script>

<section class="px-6 py-10 max-w-[640px] mx-auto">
	<PageTitle title="洛谷笑传之猜猜犇" />

	<p>
		根据犇犇猜测作者名字颜色（在发送时）。灵感来源：<a
			class="underline"
			href="https://codeforces.com/blog/entry/137983"
			>Guess the true rating of these users!</a
		>。
	</p>
	<p>
		没有进行后端限制所以你要开 F12
		看网络请求还是抓包什么的都没人拦着你（x）保证发送时与记录用户颜色间隔不超过
		24h。你看到的犇犇可能已经被删除。
	</p>
	<p class="pb-4">
		基于 (<a
			class="underline"
			href="https://github.com/EarthMessenger/cai-cai-ben"
			>EarthMessenger/cai-cai-ben</a
		>) 修改（已获得授权）
	</p>

	<slot />
</section>
