<script>
    import { logEvent } from "@utils/logs";


    export let href = '#';
    export let target = '_self';
    export let event = ''

    export let xxs = false;
    export let xs = false;
    export let sm = false;
    export let lg = false;
    export let xl = false;
    export let xxl = false;

    export let primary = false;
    export let danger = false;
    export let faded = false;
    export let link = false;

    export let outline = false;
    export let text = true;

    export let pill = false;

    export let right = false;
    export let left = false;

    export let block = false;

    export let disabled = false;

    let el;

    if (href.startsWith('http')) {
        target = '_blank';
    }

    const handleClick = () => {
        if (event) {
            logEvent(event)
        }
    }

</script>

<a
    on:click={handleClick}
    {href}
    {target}
    class="
        {$$props.class} 
        
        {pill ? 'rounded-full' : 'rounded-lg'}

        {text ? 'underline underline-offset-auto visited:opacity-90 hover:opacity-80' : ''}

        {
            primary && outline ? 'border border-green-500 text-green-500 hover:bg-black hover:bg-opacity-5'
            : primary && text ? ' text-green-500'
            : danger && outline ? 'border border-red-500 text-red-500 hover:bg-black hover:bg-opacity-5'
            : danger && text ? ' text-red-500'
            : outline ? 'text-inherit border border-opacity-80 hover:bg-black hover:bg-opacity-5'
            : primary ? 'text-green-50 bg-green-500 hover:bg-green-600 shadow-lg '
            : danger ? 'text-red-50 bg-red-500 hover:bg-red-600 shadow-lg'
            : faded ? 'text-gray-50 bg-gray-500 hover:bg-gray-600'
            : 'text-inherit'
        }

        {
            xxs ? 'text-xs'
            : xs ? 'text-xs px-2 py-1'
            : sm ? 'text-sm px-2 py-1'
            : lg ? 'text-lg px-4 py-2'
            : xl ? 'text-xl px-5 py-3'
            : xxl ? 'text-2xl px-5 py-3'
            : !text ? 'px-4 py-2' 
            : ''
        }

        {
            left ? 'text-left pl-0' 
            : right ? 'text-right pr-0' 
            : 'text-center'
        }

        {block ? 'w-full block' : 'inline-block'}
        
        {disabled ? 'opacity-50' : 'focus:ring-4'}
        {$$props.class || ''}
    "
>
    <slot />
</a>
