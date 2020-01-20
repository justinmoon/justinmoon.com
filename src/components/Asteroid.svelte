<script>
  export let x, y, width;
  $: console.log(x, y, width);
</script>

<img
  style={`position: fixed; width: ${width}px; top: ${y}px; left: ${x}px;`}
  src="/img/asteroid-1.svg" />
