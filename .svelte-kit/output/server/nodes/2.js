import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.8293ba99.js","_app/immutable/chunks/index.d88c1877.js"];
export const stylesheets = ["_app/immutable/assets/2.2db10037.css"];
export const fonts = [];
