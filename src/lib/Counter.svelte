<script lang="ts">
  export let count: number = 0
  const increment = () => {
    count += 1
  }

  /** @restProps {button | a} */
  /** Specifies the visual styling of the button. */
  export let variant: "standard" | "accent" | "hyperlink" = "standard";

  /** Sets an href value and converts the button element into an anchor/ */
  export let href = "";

  /** Controls whether the button is intended for user interaction, and styles it accordingly. */
  export let disabled = false;

  /** Specifies a custom class name for the button. */
  let className = "";
  export { className as class };

  /** Obtains a bound DOM reference to the button or anchor element. */
  export let element: HTMLElement = null;
</script>

<button on:click={increment}>
  count is {count}
  <slot />
  <br>
  <slot name="below">some text</slot>
</button>


<!--
  @component
  #Props
  @prop count: number = 0
-->