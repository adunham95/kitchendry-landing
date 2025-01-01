<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	let { children } = $props();
	import { PUBLIC_ENVIRONMENT } from '$env/static/public';
</script>

<svelte:head>
	<meta name="description" content={PUBLIC_ENVIRONMENT} />
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={`/favicon/${PUBLIC_ENVIRONMENT}/apple-touch-icon.png`}
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href={`/favicon/${PUBLIC_ENVIRONMENT}/favicon-32x32.png`}
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href={`/favicon/${PUBLIC_ENVIRONMENT}/favicon-16x16.png`}
	/>
</svelte:head>

<Header />

{@render children()}

<Footer />
