<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let activeLink = '';

	onMount(() => {
		// Set activeLink initially on component mount
		activeLink = $page.url.pathname;
	});

	$: activeLink = $page.url.pathname; // Update activeLink when the route changes
</script>

<nav>
	<a href="/" class:active={activeLink === '/'}>Home</a>
	<a href="/post-a" class:active={activeLink === '/post-a/'}>Post A</a>
	<a href="/about" class:active={activeLink === '/about/'}>About</a>
</nav>

<hr />

<slot />

<style>
	nav {
		background-color: #333;
		color: white;
		padding: 10px;
	}

	nav a {
		text-decoration: none;
		color: white;
		margin: 0 10px;
	}

	nav a.active {
		/* Add your active link styles here */
		font-weight: bold;
		text-decoration: underline;
		color: goldenrod;
	}

	hr {
		border: 1px solid #ddd;
		margin: 20px 0;
	}
</style>
