

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.65414ae8.js","_app/immutable/chunks/index.d88c1877.js","_app/immutable/chunks/singletons.af65b15e.js"];
export const stylesheets = [];
export const fonts = [];
