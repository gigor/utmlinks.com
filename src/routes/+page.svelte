<script>
    import { Link, links } from "../stores/links";
    import LinkEdit from "../components/LinkEdit.svelte";
    import LinkView from "../components/LinkView.svelte";
    import Button from "../components/Button.svelte";
    import PageLayout from "@comp/PageLayout.svelte";
    import Faq from "@comp/FAQ.svelte";
    import Seo from "@comp/Seo.svelte";

    let selectedIndex = 0;

</script>

<Seo />
<PageLayout>
<div class="flex flex-col gap-2 p-4 mx-auto max-w-3xl">
    <div class="flex justify-between">
        <h2 class="font-bold text-xl">My Links</h2>
        <Button primary on:click={()=>$links = $links.add(new Link({}))}>
            Create UTM Link
        </Button>    
    </div>

    {#each $links.links as link, index (link)}
        {#if selectedIndex == index}
            <LinkEdit {link}/>
        {:else}
            <LinkView {link} on:click={()=>selectedIndex = index}/>
        {/if}
    {:else}
        no links
    {/each}

    <Faq  class="mt-8"/> 
</div>
</PageLayout>