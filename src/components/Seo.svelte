<script>
    import { page } from "$app/stores";
    import { env } from "$env/dynamic/public";
        
    let head_title = $page?.data?.head_title || 'UTM Link Buider - Build & Collect your UTM Links for free';
    let head_description = $page?.data?.head_description || 'Build, Collect, Reuse and share your UTM Links as text, html or markdown';
    let head_canonical = $page?.data?.head_canonical || `https://utmlinks.com${$page.url.pathname}`;
    let og_title = $page?.data?.og_title || head_title;
    let og_description = $page?.data?.og_description || head_description;
    let og_image = $page?.data?.og_image || `https://utmlinks.com/og_image.jpg`;
    let og_image_width = $page?.data?.og_image_width || '1920';
    let og_image_height = $page?.data?.og_image_height || '1008';
    let twitter_site = $page?.data?.twitter_site || '@gigor';
    let twitter_creator = $page?.data?.twitter_creator || twitter_site;
    let twitter_image = $page?.data?.twitter_image || og_image;
    let twitter_image_width = $page?.data?.twitter_image_width || og_image_width;
    let twitter_image_height = $page?.data?.twitter_image_height || og_image_height;

    let robots = env.PUBLIC_ROBOTS || 'index, follow';
</script>


<svelte:head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png" />

    <title>{head_title}</title>
    <meta name="description" content="{head_description}">

    <meta property="og:title" content="{og_title}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{head_canonical}">
    <meta property="og:image" content="{og_image}">
    <meta property="og:image:type" content="image/{og_image.split('.').pop()}" />
    <meta property="og:image:width" content="{og_image_width}" />
    <meta property="og:image:height" content="{og_image_height}" />
    <meta property="og:description" content="{og_description}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="{twitter_site}">
    <meta name="twitter:creator" content="{twitter_creator}">
    <meta name="twitter:image:src" content="{twitter_image}">
    <meta name="twitter:image:width" content="{twitter_image_width}">
    <meta name="twitter:image:height" content="{twitter_image_height}">

    <link rel="canonical" href="{head_canonical}">

    <meta name="theme-color" content="#322151">

    <meta name="robots" content="{robots}">

    <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width viewport-fit=cover"
    />
</svelte:head>

