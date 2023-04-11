<script>
    export let value = ''
    export let placeholder = ''
    export let id = ''
    let className = ''
    export {className as class}

</script>

<label class="{className} relative">
    {#if $$slots.default}
        <span class="absolute -top-2.5 left-3 font-bold text-sm text-slate-500 bg-white pr-1"><slot/></span>
    {/if}

    <input 
        type="text" 
        bind:value
        {placeholder}
        {id}
        class="
            block
            w-full
            rounded-xl
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
        "
    />
</label>