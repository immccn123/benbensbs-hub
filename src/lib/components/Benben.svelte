<script lang="ts">
	import MarkdownIt from "markdown-it";
	import LuoguNameColor from "./LuoguNameColor.svelte";

	export let benben: Ccb.HandledBenben;
	export let showDetails: boolean;
</script>

<div class="flex flex-row border border-primary rounded-md p-2 mb-2 p-3">
	<img
		src={`https://cdn.luogu.com.cn/upload/usericon/${benben.user.id}.png`}
		class="{showDetails
			? ''
			: 'blur-[6px]'} w-18 object-contain mr-3 transition duration-200"
		draggable={showDetails}
		alt="头像"
	/>

	<div class="flex flex-col">
		<div class="flex items-center">
			<LuoguNameColor
				color={showDetails ? benben.user.color : null}
				class="{showDetails
					? ''
					: 'blur-[6px]'} transition duration-200"
			>
				{benben.user.name}
			</LuoguNameColor>
			<time
				class="ml-2 text-gray-500"
				datetime={benben.time.toISOString()}
			>
				{benben.time.toLocaleString()}
			</time>
		</div>
		<article class="prose">{@html new MarkdownIt().render(benben.content)}</article>
	</div>
</div>
