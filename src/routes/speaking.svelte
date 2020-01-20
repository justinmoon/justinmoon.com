<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch("speaking.json");
    const events = await res.json();

    if (res.status === 200) {
      return { events };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let events;
  import LinkList from "../components/LinkList.svelte";
</script>

{#each events as event}
  <LinkList {...event} />
{/each}
