<script>
  export let id;
</script>

<main id={id} class="min-w-full" {...$$restProps}>
  <slot />
</main>