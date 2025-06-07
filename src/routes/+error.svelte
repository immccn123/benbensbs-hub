<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="text-center pt-4">
	<h1 class="text-2xl">出错啦 - {page.status} {page.error?.message}</h1>

	<p class="text-5xl font-bold">广告位招租</p>
</div>