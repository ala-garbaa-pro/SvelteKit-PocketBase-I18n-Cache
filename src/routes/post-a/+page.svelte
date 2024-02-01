<script lang="ts">
	import { onMount } from 'svelte';

	let reponse = '';
	onMount(async () => {
		const resp = await fetch('/api');
		reponse = JSON.stringify(await resp.json(), null, 2);
	});
</script>

<h1>Post A: Embracing the Unexpected</h1>
<pre>
{reponse}
</pre>
<p>
	Hey fellow adventurers! 🌍✨ Life is a wild journey, and sometimes the best stories unfold when we
	least expect them. Today, let's dive into the beauty of embracing the unexpected!
</p>

<p>
	🔮 Imagine this: A spontaneous road trip that takes you to hidden gems, unplanned encounters that
	turn into lifelong friendships, and the thrill of stepping out of your comfort zone. Life's magic
	often lies in those serendipitous moments that catch us by surprise.
</p>

<p>
	🚰 Share your tales of spontaneity! Whether it's a last-minute decision that led to unforgettable
	memories or a chance encounter that changed your perspective, let's celebrate the twists and turns
	that make our stories uniquely ours.
</p>

<p>
	💬 Comment below with your favorite "plot twist" in life, and let's inspire each other to keep
	saying "yes" to the unknown. Who knows what incredible adventures await when we open ourselves up
	to the unexpected? ✨ <span class="hashtags"
		>#EmbraceTheJourney #LifeIsAnAdventure #PostAAdventures</span
	>
</p>
