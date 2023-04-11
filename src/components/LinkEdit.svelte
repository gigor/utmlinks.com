<script>
    import { tick } from "svelte";
    import { Link } from "../stores/links";
    import InputText from "./InputText.svelte";
    import { slide } from "svelte/transition";
    import Button from "./Button.svelte";


    /** @type {Link} */
    export let link;

    /**
     * @param param { UTMParamType }
     * @returns {Promise<void>}
     */
    const handleAdd = async (param) => {

        console.log(param);
        link.params = link.params.map(p=>{
            p.used = p.name === param.name ? true : p.used;
            return p;
        })

        await tick();

        /** @type {HTMLInputElement | null}*/
        // @ts-ignore
        let element = document.querySelector(`#${param.name}`);
        console.log(element);
        element?.focus();

    }


    /** @type {'plain'|'html'|'markdown'}*/
    let type = 'plain';

    let types = [
        {
            value: 'plain',
            label: 'Text',
        },
        {
            value: 'html',
            label: 'HTML',
        },
        {
            value: 'markdown',
            label: 'Markdown',
        }
    ]

    $: result = type === 'plain' ? link.url 
        : type === 'html' ? link.html
        : type === 'markdown' ? link.markdown
        : '';

    const handleCopy = () => {
        navigator?.clipboard?.writeText(result);
    }


</script>

<div class="flex flex-col gap-4 p-4 border bg-white rounded-xl" transition:slide|locak>
    <InputText 
        bind:value={link.base}
        placeholder="https://example.com/my_page"
    >Link Base</InputText>

    {#each link.params.filter(p=>p.used) as param}
        
        <InputText 
            bind:value={param.value} 
            id={param.name}
        >
            {param.label}
            <button 
                slot="actions"
                on:click={()=>param.used = false}
                class="py-1 px-2 text-lg"
            >&times;</button>
        </InputText>
    {/each}

    <div class="flex gap-2 overflow-auto pb-4 -mr-4">
        {#each link.params.filter(p=>!p.used) as param}
            <Button
                on:click={()=>handleAdd(param)}
            >+ {param.label}</Button>
        {/each}
    </div>

    <hr>
    <div class="flex gap-4">
        {#each types as t}
            <label>
                <input   
                    class="align-middle"
                    type="radio" 
                    name="linktype" 
                    value={t.value}
                    bind:group={type} 
                    id={t.value}
                />
                <span class="align-middle">{t.label}</span>
            </label>
        {/each}
    </div> 

    {#if type == 'html' || type == 'markdown'}
        <InputText
            bind:value={link.label}
            placeholder="Bad example: Click here"
        >Text on a Link</InputText>
    {/if}

    <div class="whitespace-nowrap flex flex-nowrap gap-2">
        <InputText value={result} class="flex-1">
            Your Link

            <Button 
                slot="actions"
                on:click={handleCopy}
            >Copy</Button>
        </InputText>


    </div>
</div>

