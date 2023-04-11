<script>
    import { onMount } from "svelte";
    import "../app.css";
    import { links } from "../stores/links";

    onMount(() => {
        console.log("mounted");
        document.addEventListener('blur', (e) => {
            $links = $links
        }, true);
    });
  </script>
  
  <slot />