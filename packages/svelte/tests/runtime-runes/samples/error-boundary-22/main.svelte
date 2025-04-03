<script>
	import Child from "./Child.svelte"
</script>

<svelte:boundary>
	<div>This-should-be-removed</div>
	{#if true}
		<Child />
	{/if}
	{#snippet failed()}
		<div>error</div>
	{/snippet}
</svelte:boundary>
