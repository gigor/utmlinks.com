import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            '@comp/*': 'src/components/*',
            '@st/*': 'src/stores/*',
            '@utils/*': 'src/utils/*',
            '@assets/*': 'src/assets/*',
			'@content/*': 'src/content/*'
        }
    },
    preprocess: [
        preprocess({
            postcss: true
        })
    ]
};

export default config;
