<script>
	import { page } from '$app/stores'
  import { SITE_NAME, SITE_SEPARATOR, SITE_DESCRIPTION } from '@packages/metadata';
</script>

<svelte:head>
	<title>Docs {SITE_SEPARATOR} {SITE_NAME}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="Docs {SITE_NAME} {SITE_SEPARATOR}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<div class="container p-10 space-y-4">
	<h1>Homepage</h1>
	<hr />
	<p>
		The homepage has been setup so no sidebar navigation is visible on desktop screens. However if you resize or view on smaller mobile size
		devices, a hamburger menu will appear, allowing you to access the standard navigation.
	</p>
</div>