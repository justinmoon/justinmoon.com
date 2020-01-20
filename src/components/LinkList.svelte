<script>
  import { displayDate } from "../util.js";
  export let title, description, tags, date, link;
</script>

<ul>
  <li class="p-2 my-2 -mx-2 rounded hover:bg-gray-200">
    <!-- tiny screens -->
    <a class="sm:hidden" rel="prefetch" href={link}>
      <div class="text-lg font-medium">{title}</div>
      <div class="mt-1">{description}</div>
      <div class="flex items-baseline mt-1">
        {#each tags as tag}
          <div class="{tag.classes} text-sm px-1 mr-2 rounded">
            {tag.display}
          </div>
        {/each}
        <div class="font-mono text-xs">{displayDate(date)}</div>
      </div>
    </a>
    <!-- non-tiny screens -->
    <a class="hidden sm:block" rel="prefetch" href={link}>
      <div class="flex justify-between">
        <div>
          <div class="text-2xl font-medium">{title}</div>
          <div class="mt-1 text-lg upper">{description}</div>
        </div>
        <div class="flex flex-col items-end mt-1">
          <div class="flex">
            {#each tags as tag}
              <div class="{tag.classes} ml-2 px-2 py-1 text-lg rounded">
                {tag.display}
              </div>
            {/each}
          </div>
          <div class="mt-2 font-mono text-md">{displayDate(date)}</div>
        </div>
      </div>
    </a>
  </li>
</ul>
