<script lang="ts">
	import styles from "./LuoguNameColor.module.css";

	export let color: LuoguColors | null;
	let className: string = "";
	export { className as class };

	$: colorClass = color ? styles[color.toLowerCase()] : "";
</script>

<span class={`${styles.name} ${colorClass} ${className}`.trim()}>
	<slot />
</span>
