<script>
	import { marked } from 'marked';

	import faqText from '@content/FAQ.md?raw';

	let className = '';
	export { className as class };

	const tokens = marked.lexer(faqText);

	/** @type {{ text: string, answer: string}[]}*/
	const faqItems = [];

	for (const i in tokens) {
		const token = tokens[i];
		if (token.type === 'heading' && token.depth === 2) {
			const currentQuestion = { text: token?.text, answer: '' };

			let j = parseInt(i) + 1;
			// @ts-ignore
			while (tokens[j] && tokens[j].type !== 'heading' && tokens[j]?.depth !== 2) {

				// console.log(tokens[j]);

				// @ts-ignore
				if (tokens[j]?.raw) {
					// @ts-ignore
					currentQuestion.answer += `\n\n${tokens[j]?.raw}`;
				}
				j++;
			}
			faqItems.push(currentQuestion);
		}
	}
</script>

<div
	class="flex flex-col gap-2 max-w-full w-full {className}"
	itemscope
	itemtype="https://schema.org/FAQPage"
>
	{#each faqItems as { text, answer }}
		<details
			class="faq-block rounded-md overflow-hidden bg-white border rounded-xl"
			itemprop="mainEntity"
			itemtype="https://schema.org/Question"
		>
			<summary
				class="p-4 text-xl font-bold bg-black/0 hover:bg-black/5 transition-colors cursor-pointer"
				itemprop="name">{text}</summary
			>
			<div
				class="p-4 border-t mt-1 prose prose-lg max-w-none"
				itemprop="acceptedAnswer"
				itemtype="https://schema.org/Answer"
			>
				{@html marked.parse(answer)}
			</div>
		</details>
	{/each}
</div>

<style lang="postcss">
	/* .faq-block :global(p) {
		@apply text-xl leading-relaxed;
		@apply mb-4;
	} */
</style>
