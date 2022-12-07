<script lang="ts">
	import { Intro, App, Hero, Logo, Theme, Link } from '@packages/components'
	import '@packages/components/css/global.css'
	import { page } from '$app/stores'

	// Skeleton Features
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import { Drawer } from '@skeletonlabs/skeleton'

	// Local Features
	import Navigation from '$lib/Navigation/Navigation.svelte'
	import { storeDrawer } from '$lib/Navigation/stores'

	// Stylesheets
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'

	function drawerOpen(): void {
		storeDrawer.set(true)
	}

	// Reactive Properties
	$: classesSidebarLeft = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64'
</script>

<!-- Drawer -->
<Drawer open={storeDrawer} position="left">
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Navigation />
</Drawer>

<!-- Layout -->
<Intro>
	<nav class="h-screen w-48 border-r fixed left-0 top-0 bottom-0 z-10">
		<div class="grid items-center justify-center gap-4 my-4">
			<Logo />
			<Theme />
		</div>
		<Link href="/docs/page-1">Page 1</Link>
		<Link href="/docs/page-2">Page 2</Link>
		<Link href="/docs/page-3">Page 3</Link>
	</nav>
	<!-- App Shell -->
	<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebarLeft}">
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					<div class="flex items-center">
						<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
							<span>
								<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
									<rect width="100" height="20" />
									<rect y="30" width="100" height="20" />
									<rect y="60" width="100" height="20" />
								</svg>
							</span>
						</button>
						<strong class="text-xl uppercase">Skeleton</strong>
					</div>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<a class="btn btn-sm" href="/">Home</a>
					<a class="btn btn-sm" href="/about">About</a>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- Left Sidebar Slot -->
		<svelte:fragment slot="sidebarLeft">
			<Navigation />
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
	<App id="docs">
		<Hero>
			<svelte:fragment slot="title"><slot /></svelte:fragment>
			<svelte:fragment slot="description">Check out that sweeet sidebar</svelte:fragment>
		</Hero>
	</App>
</Intro>
