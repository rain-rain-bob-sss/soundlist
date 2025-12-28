import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }: { fetch: typeof global.fetch }) => {
	const fetchPaths = async (url: string, prefix: string) => {
		const res = await fetch(url);
		const text = await res.text();
		const paths = text.split('\n')
			.map((path: string) => path.replace('sound\\', '').replaceAll('\\', '/').trim())
			.filter((path: string) => path.length > 0)
			.map((path: string) => `${prefix}${path}`);
		return paths;
	};

	const [sounds, css, gmod] = await Promise.all([
		fetchPaths('/hl2/path.txt', 'hl2/'),
		fetchPaths('/css/path.txt', 'css/'),
		fetchPaths('/gmod/path.txt', 'gmod/')
	]);

	const seenFilenames = new Set<string>();
	const allSounds = [sounds, css, gmod].flat().filter(path => {
		const filename = path.split('/').pop();
		if (seenFilenames.has(filename!)) return false;
		seenFilenames.add(filename!);
		return true;
	});

	return {
		sounds: allSounds
	};
}) satisfies PageServerLoad;
