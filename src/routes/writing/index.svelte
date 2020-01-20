<script context="module">
  export async function preload({ params, query }) {
    return this.fetch(`/writing/index.json`)
      .then(r => {
        return r.json();
      })
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { displayDate } from "../../util.js";
  import LinkList from "../../components/LinkList.svelte";
  import Asteroid from "../../components/Asteroid.svelte";
  export let posts;
</script>

<style>
  .asteroid-1 {
    position: fixed;
    width: 16em;
    top: -1em;
    left: 7em;
  }
</style>

<svelte:head>
  <title>justinmoon.com</title>
</svelte:head>

<ul>
  {#each posts as post}
    <LinkList {...post} />
  {/each}
</ul>
