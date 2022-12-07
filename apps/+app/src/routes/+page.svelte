<script>
	import {
		SITE_NAME,
		SITE_TITLE,
		SITE_SEPARATOR,
		SITE_AUTHOR,
		SITE_DESCRIPTION
	} from '@packages/metadata'
	import { page } from '$app/stores'
	import { Intro } from '@packages/components'
	import { GradientHeading } from '@skeletonlabs/skeleton'
	import Hero from '$apps/lib/Hero.svelte'
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<div class="container mx-auto p-8 space-y-8">
	<GradientHeading
		tag="h1"
		direction="bg-gradient-to-br"
		from="from-primary-500"
		to="to-accent-500"
	>
		Homepage
	</GradientHeading>
	<Hero />
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<hr />
	<section class="card card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</section>
	<hr />
	<section class="flex space-x-2">
		<a
			class="btn btn-filled-primary"
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noreferrer">SvelteKit</a
		>
		<a
			class="btn btn-filled-accent"
			href="https://tailwindcss.com/"
			target="_blank"
			rel="noreferrer">Tailwind</a
		>
		<a class="btn btn-filled-tertiary" href="https://github.com/" target="_blank" rel="noreferrer"
			>GitHub</a
		>
	</section>
</div>
