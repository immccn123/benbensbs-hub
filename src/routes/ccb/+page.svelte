<script lang="ts">
	import { onMount } from "svelte";
	import chance from "chance";
	import LuoguNameColor from "$lib/components/LuoguNameColor.svelte";
	import Benben from "$lib/components/Benben.svelte";

	const luoguColors: LuoguColors[] = [
		"Cheater",
		"Gray",
		"Blue",
		"Green",
		"Orange",
		"Red",
		"Purple",
	];

	let benbenQueue: Ccb.HandledBenben[] = [];
	let benben: Ccb.HandledBenben | null = null;
	let answer: LuoguColors | null = null;
	let confirmed = false;

	let score = { correct: 0, total: 0 };

	$: accuracy =
		score.total === 0
			? "0"
			: ((score.correct / score.total) * 100).toFixed(0);

	async function getRandomBenbens(): Promise<Ccb.HandledBenben[]> {
		const res = await fetch(
			"https://api-benben.imken.dev/hub/ccb/getRandom",
		);

		const json = await res.json();

		return chance()
			.shuffle(json)
			.map((b: any) => {
				return {
					content: b.content,
					time: new Date(b.time),
					user: {
						id: b.userId,
						name: b.username,
						color: b.userColor,
					},
				};
			});
	}

	const fetchMore = async () => {
		while (benbenQueue.length < 3) {
			const newBenben = await getRandomBenbens();
			benbenQueue = benbenQueue.concat(newBenben);
		}
	};

	const nextBenben = async () => {
		answer = null;
		confirmed = false;
		benbenQueue.shift();
		benben = benbenQueue[0] || null;
		await fetchMore();
	};

	const submit = () => {
		if (benben && answer !== null) {
			confirmed = true;
			score.total += 1;
			if (answer === benben.user.color) {
				score.correct += 1;
			}
		}
	};

	onMount(() => {
		fetchMore()
			.then((_) => nextBenben())
			// 重试五次
			.catch(() => fetchMore())
			.catch(() => fetchMore())
			.catch(() => fetchMore())
			.catch(() => fetchMore())
			.catch(() => fetchMore());
	});
</script>

{#if !benben}
	<p>加载中……</p>
{:else}
	<div>
		<article>
			<Benben {benben} showDetails={confirmed} />
		</article>

		<form on:submit|preventDefault={submit} class="mt-2">
			{#each luoguColors as c}
				<div
					class={[
						confirmed &&
							c === benben.user.color &&
							"outline-2 outline-green-500",
						confirmed &&
							c === answer &&
							answer !== benben.user.color &&
							"outline-2 outline-red-500",
					]}
				>
					<label>
						<input
							type="radio"
							name="answer"
							bind:group={answer}
							value={c}
							disabled={confirmed}
						/>
						<LuoguNameColor color={c}>
							<span
								class={[
									confirmed &&
										c === answer &&
										answer !== benben.user.color &&
										"line-through decoration-black decoration-2",
								]}>{c}</span
							>
						</LuoguNameColor>
					</label>
				</div>
			{/each}
			{#if !confirmed}
				<button
					class="mt-2 inline-block px-4 py-1 text-sm border border-primary rounded-full hover:bg-primary hover:text-white transition"
					type="submit">确认</button
				>
			{/if}
		</form>

		{#if confirmed && answer !== null}
			<button
				class="inline-block px-4 py-1 text-sm border border-primary rounded-full hover:bg-primary hover:text-white transition"
				on:click={nextBenben}
			>
				下一题
			</button>
		{/if}

		<p>准确度：{accuracy}% ({score.correct} / {score.total})</p>
	</div>
{/if}
