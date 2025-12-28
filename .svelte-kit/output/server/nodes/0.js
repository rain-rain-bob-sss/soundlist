

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c9d4f91e.js","_app/immutable/chunks/index.d88c1877.js"];
export const stylesheets = [];
export const fonts = [];
