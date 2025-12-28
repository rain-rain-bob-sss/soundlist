import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }: { fetch: typeof global.fetch }) => {
	const fetchPaths = async (url: string, prefix: string) => {
		return fetch(url)
			.then((res: Response) => res.text())
			.then((text: string) => text.split('\n'))
			.then((paths: string[]) => paths.map((path: string) => path.replace('sound\\', '').replaceAll('\\', '/').trim()))
			.then((paths: string[]) => paths.filter((path: string) => path.length > 0))
			.then((paths: string[]) => paths.map((path: string) => `${prefix}${path}`));
	};

	const [sounds, css, gmod] = await Promise.all([
		fetchPaths('/hl2/path.txt', 'hl2/'),
		fetchPaths('/css/path.txt', 'css/'),
		fetchPaths('/gmod/path.txt', 'gmod/')
	]);

	return {
		sounds,
		css,
		gmod
	};
}) satisfies PageServerLoad;
