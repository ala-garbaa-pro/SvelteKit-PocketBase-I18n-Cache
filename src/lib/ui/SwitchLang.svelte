<script lang="ts">
	import { getAvailableLocales } from '$lib/functions/getAvailableLocales';
	import { selectedLang } from '$lib/stores/lang';
	import type { I18n } from '$lib/types/local.type';
	import { onMount } from 'svelte';

	let availableLocales: I18n[];

	const getLocales = async () => {
		availableLocales = await getAvailableLocales();
	};

	const handleSelectChange = (e: Event) => {
		selectedLang.set((e.target as HTMLSelectElement).value);
	};

	onMount(() => {
		getLocales();
	});
</script>

{#if !$selectedLang}
	Init default selected locale
{:else}
	<p>Selected language is <b>{$selectedLang}</b></p>
{/if}

{#if availableLocales && availableLocales.length > 0}
	<select value={$selectedLang} name="switch-lang" on:change={handleSelectChange}>
		{#each availableLocales as local}
			<option value={local.code}>{local.name}</option>
		{/each}
	</select>
{:else}
	<span>Loading locales from DB...</span>
{/if}
