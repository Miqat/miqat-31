<script lang="ts">
	import {
		mediaQuery,
		Intro,
		App,
		Header,
		Scrollbar,
		Dialog,
		Nav,
		Logo,
		Theme,
		Button,
		Social,
		Device,
		Link,
		Icon
	} from '@packages/components'
	import '@packages/components/css/global.css'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import '../app.postcss'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')

	let device
</script>

<Device device="hidden" />

{#if !$md}
	<Scrollbar />
{/if}

<!-- Mobile -->
<Header class="block md:hidden">
	<Dialog slot="left" type="nav">
		<Nav />
	</Dialog>
	<Logo slot="center" />
	<Theme slot="right" />
</Header>

<!-- Desktop -->
<Header class="hidden md:block">
	<Logo slot="left" class="ml-8" />
	<Nav slot="center" />
	<div class="flex items-center justify-center gap-2" slot="right">
		<Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
			<Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
		</Link>
		<Theme />
		<Button href="/signin" class="ml-2">Sign Up</Button>
	</div>
</Header>

<Intro>
	<App id="app">
		<slot />
	</App>
</Intro>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<!-- Insert the App Bar: -->
		<AppBar>
			<svelte:fragment slot="lead">
				<h1>Skeleton</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
		<!-- --- -->
	</svelte:fragment>
	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Content Slot -->
	<slot />
</AppShell>

<footer class="container mx-auto p-4 md:p-8">
	<Social />
</footer>
