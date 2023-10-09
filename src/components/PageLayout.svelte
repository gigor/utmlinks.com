<script>
    import PageFooter from "./PageFooter.svelte";
    import PageHeader from "./PageHeader.svelte";

</script>

<section class="flex flex-col justify-between items-center h-full">
    <PageHeader></PageHeader>
    <main class="flex-1 w-full"><slot></slot></main>
    <PageFooter></PageFooter>
</section>