<script>
    export let href = '';
    export let target = '';
    let classList = ''
    export { classList as class };
</script>

<a 
    {href}
    {target}
    class="
        underline
        {classList}
    "
><slot/></a>