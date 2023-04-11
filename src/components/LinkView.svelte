<script>
    import { Link } from "../stores/links";

    /** @tyoe {Link} */
    export let link;

</script>

<button on:click class="text-left p-4 border bg-white/50 hover:bg-white/100 transition-colors rounded-xl">
    <strong>{link.base || 'empty link'}</strong>

    <dl class="grid grid-rows-2 grid-flow-col text-sm justify-start gap-x-4">
        {#if link.label}
            <dt class="font-bold">Link Text</dt>
            <dd class="">{link.label}</dd>
        {/if}

        {#each link.params as param}
            {#if param.used && param.value}
                <dt class="font-bold">{param.label}</dt>
                <dd class="">{param.value}</dd>
            {/if}
        {/each}
    </dl>
</button>

