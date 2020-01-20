<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`writing/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div>

  <section class="content">

    <div class="mt-10">
      <h1 class="text-lg sm:text-2xl">{post.title}</h1>
      <h2 class="italic sm:text-lg">{post.description}</h2>
    </div>

    <div class="mt-10 sm:text-lg">
      {@html post.html}
    </div>
  </section>

</div>

