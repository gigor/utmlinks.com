<script>
    import { onMount } from "svelte";
    import "../app.css";
    import { links } from "../stores/links";
    import { install as installAnalytics} from '@utils/logs.js';

    onMount(() => {
        installAnalytics();
        document.addEventListener('blur', (e) => {
            $links = $links
        }, true);
    });
  </script>
  
  <slot />
