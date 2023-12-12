<script>
  import data from "./lib/Counter.svelte?sveld&raw";

  console.log(data)
</script>

<main>
  Here is the parsed component data of <b>"./lib/Counter.svelte</b>:
  <pre>
    { JSON.stringify(data, undefined, 2) }
  </pre>
</main>