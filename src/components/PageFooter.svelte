<script>
    import Link from "./Link.svelte";

</script>
<footer class="bg-black/5 w-full">
    <div class="p-8 flex flex-col md:flex-row gap-8 justify-between w-full container max-w-3xl mx-auto">
        <div>
            <h4>My other things</h4>
            <ul class="flex flex-col gap-2">
                <li><Link href="https://yawplan.com">YAW Plan</Link> – Fitness Planner with Timers</li>
                <li><Link href="https://freeworkouts.net">Free Workouts</Link></li>
                <li><Link href="https://critikid.com">Critikid</Link> – Critical thinking for kids</li>
                <li><Link href="https://youwilldie.net">You will die</Link></li>
                <li><Link href="https://getyourshittogether.work">Get your shit together</Link> – a good reminder</li>
            </ul>
        </div>

        <div class="flex flex-col self-stretch justify-between gap-8">
            <p>Made by <Link href="https://github.com/gigor">@gigor</Link></p>
        </div>
    </div>
</footer>