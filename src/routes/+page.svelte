<script>
	import { tick } from "svelte";
	import InputText from "../components/InputText.svelte";
    import { Link, links } from "../stores/links";
    import LinkEdit from "../components/LinkEdit.svelte";
    import LinkView from "../components/LinkView.svelte";
    import Button from "../components/Button.svelte";
    import A from "../components/A.svelte";
    import { isExtension } from "../utils/context";


    console.log($links);

    let selectedIndex = 0;

</script>
<div class="flex flex-col gap-2 p-4 mx-auto max-w-3xl">
    <div class="flex justify-between">
        <h1 class="font-bold text-xl">Link Builder</h1>
        <Button primary on:click={()=>$links = $links.add(new Link({}))}>
            New Link
        </Button>    
    </div>

    {#each $links.links as link, index (link)}
        <!-- <LinkEdit link={link}></LinkEdit> -->
        <!-- <hr> -->
        {#if selectedIndex == index}
            <LinkEdit {link}/>
        {:else}
            <LinkView {link} on:click={()=>selectedIndex = index}/>
        {/if}
    {:else}
        no links
    {/each}

    <!-- <LinkEdit link={new Link({})}></LinkEdit> -->
</div>

<p 
    class="p-4 mx-auto max-w-3xl text-slate-500 text-right"
>
    Made by <A href="https://github.com/gigor" target="_blank">gigor</A>. 
    {#if !isExtension}
        Has <A href="#" target="_blank">Chrome</A> & <A href="#" target="_blank">Firefox</A> extensions.
    {/if}
</p>