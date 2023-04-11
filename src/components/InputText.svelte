<script>
    export let value = ''
    export let placeholder = ''
    export let id = ''
    let className = ''
    export {className as class}

</script>

<label class="{className} relative mt-2">
    {#if $$slots.default}
        <span class="absolute -top-3 left-3 font-bold text-sm text-slate-500 bg-white pr-1"><slot/></span>
    {/if}

    <span class="flex flex-nowrap gap-2">
        <input 
            type="text" 
            bind:value
            {placeholder}
            {id}
            class="
                flex-1
                w-full
                rounded-xl
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            "
        />
        {#if $$slots.actions}
            <span class="flex-grow-0"><slot name="actions"></slot></span>
        {/if}
    </span>
</label>