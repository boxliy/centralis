import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const origin = site?.origin ?? 'https://qishusolution.com';
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${origin}/sitemap-index.xml`,
		`Sitemap: ${origin}/sitemap-0.xml`,
		`LLMs: ${origin}/llms.txt`,
		'',
	].join('\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
