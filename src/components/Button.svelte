<script>
    export let primary = false;
    let classList = ''
    export { classList as class };
</script>
<button
    class="
        {primary ? 'bg-green-100 border border-green-300 hover:bg-green-200 hover:border-green-400  focus:bg-green-200 focus:border-green-400 ' : 
            'bg-slate-100 border border-slate-300 hover:bg-slate-200 hover:border-slate-400  focus:bg-slate-200 focus:border-slate-400 '
        }
        rounded-xl px-3 py-2
        transition-colors
        whitespace-nowrap
        {classList}
    "
    on:click
    on:focus
    on:blur
><slot/></button>