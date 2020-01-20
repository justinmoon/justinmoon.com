<script>
  import Nav from "../components/Nav.svelte";
  import Tailwind from "../components/Tailwind.svelte";
  import Asteroid from "../components/Asteroid.svelte";
  import { onMount } from "svelte";
  import { get, writable } from "svelte/store";

  export let segment;
  const asteroids = writable([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function convertRemToPixels(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }

  onMount(() => {
    for (var i = 0; i < 3; i++) {
      var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );

      // page container is 42 rem
      const pageWidth = convertRemToPixels(42);

      const asteroidWidth = getRandomInt(20, 100);
      const gutterWidth = Math.round(Math.max(0, (w - pageWidth) / 2));

      // Subtrace 100 in attempt to not overlap content
      const x =
        Math.random() > 0.5
          ? getRandomInt(0, gutterWidth - 100)
          : w - getRandomInt(0, gutterWidth - 100);
      const y = getRandomInt(0, h);

      asteroids.update(a => {
        a.push({ x, y, width: asteroidWidth });
        return a;
      });
    }
  });
</script>

<div class="max-w-2xl mx-auto">
  <div class="m-6 ">
    <Nav {segment} />
    <main class="mt-6">
      <slot />
    </main>
    <!--{#each $asteroids as asteroid}
      <Asteroid {...asteroid} />
    {/each}-->
  </div>
</div>
