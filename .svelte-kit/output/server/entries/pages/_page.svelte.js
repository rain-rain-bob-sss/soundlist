import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../chunks/index.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
const browser = BROWSER;
const Switch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".switch.svelte-350hp4.svelte-350hp4{position:relative;display:inline-block;width:50px;height:26px}.switch.svelte-350hp4 input.svelte-350hp4{opacity:0;width:0;height:0}.slider.svelte-350hp4.svelte-350hp4{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:hsl(220, 25%, 10%);-webkit-transition:0.4s;transition:0.4s;border-radius:26px}.slider.svelte-350hp4.svelte-350hp4:before{position:absolute;content:'';height:18px;width:18px;left:4px;bottom:4px;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-350hp4:checked+.slider.svelte-350hp4{background-color:#115e9c}input.svelte-350hp4:checked+.slider.svelte-350hp4{box-shadow:0 0 1px #115e9c}input.svelte-350hp4:checked+.slider.svelte-350hp4:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$1);
  return `<label class="switch svelte-350hp4"><input type="checkbox" class="svelte-350hp4"${add_attribute("checked", checked, 1)}>
	<span class="slider svelte-350hp4"></span>
</label>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');.header.svelte-axct91.svelte-axct91{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.github.svelte-axct91 a.svelte-axct91{text-decoration:none;color:hsl(220, 25%, 70%)}.config.svelte-axct91.svelte-axct91{display:flex;align-items:center}.volume-bar.svelte-axct91.svelte-axct91{margin-right:16px}.volume-bar.svelte-axct91 input.svelte-axct91{width:100px;height:4px;border-radius:2px;background:hsl(220, 25%, 10%);outline:none;opacity:0.7;-webkit-transition:0.2s;transition:opacity 0.2s}.container.svelte-axct91.svelte-axct91{background-color:#0a0c10;display:flex;justify-content:center;font-family:'Inter', sans-serif;min-height:100vh}main.svelte-axct91.svelte-axct91{width:100%;max-width:1280px;padding:64px}@media(max-width: 768px){main.svelte-axct91.svelte-axct91{padding:32px}}.search-bar-container.svelte-axct91.svelte-axct91{width:100%;display:flex}.search-input.svelte-axct91.svelte-axct91{background-color:hsl(220, 25%, 10%);border:0;height:64px;border-radius:1000px;flex:1;font-size:16px;font-family:'Inter', sans-serif;color:rgb(223, 227, 236);padding:0 32px}.search-input.svelte-axct91.svelte-axct91::placeholder{color:hsl(220, 25%, 70%)}.search-input.svelte-axct91.svelte-axct91:focus,.search-input.svelte-axct91.svelte-axct91:hover{background-color:#0a0c10;outline:1px solid hsl(220, 25%, 50%, calc(100% / 3))}.tags.svelte-axct91.svelte-axct91{margin-top:16px;display:flex;flex-wrap:wrap;gap:8px}.tag.svelte-axct91.svelte-axct91{background-color:hsl(220, 25%, 10%);border:0;height:32px;border-radius:1000px;padding:0 16px;font-size:14px;font-family:'Inter', sans-serif;color:rgb(223, 227, 236);display:flex;align-items:center;cursor:pointer}.tag.svelte-axct91.svelte-axct91:hover{background-color:#0a0c10;outline:1px solid hsl(220, 25%, 50%, calc(100% / 3))}.tag.active.svelte-axct91.svelte-axct91{background-color:hsl(220, 25%, 20%)}.sounds.svelte-axct91.svelte-axct91{margin-top:64px;display:flex;flex-wrap:wrap;gap:32px;justify-content:center}.sounds.minimal.svelte-axct91.svelte-axct91{width:calc(min(100vw, 1280px) - 128px)}@media(max-width: 768px){.sounds.minimal.svelte-axct91.svelte-axct91{width:calc(min(100vw, 1280px) - 64px)}}.sounds.minimal.svelte-axct91.svelte-axct91{margin-top:32px;flex-direction:column;gap:8px;cursor:pointer}.sound-container.svelte-axct91.svelte-axct91{display:flex;flex-direction:column;align-items:center;background:none;border:0;width:30%}.play-button.svelte-axct91.svelte-axct91{background-color:hsl(220, 25%, 10%);border:0;height:64px;width:64px;border-radius:1000px;margin-bottom:16px;cursor:pointer}.play-button.svelte-axct91.svelte-axct91::before{content:'';display:block;width:0;height:0;border-top:12px solid transparent;border-bottom:12px solid transparent;border-left:18px solid hsl(220, 25%, 70%);margin-left:calc(50% - 6px);margin-top:calc(50% - 24px)}.play-button.active.svelte-axct91.svelte-axct91::before{border-left:18px solid hsl(220, 25%, 50%, calc(100% / 3))}.play-button.active.svelte-axct91.svelte-axct91,.play-button.svelte-axct91.svelte-axct91:hover{background-color:#0a0c10;outline:1px solid hsl(220, 25%, 50%, calc(100% / 3))}.sound-name.svelte-axct91.svelte-axct91{color:hsl(220, 25%, 70%);user-select:all;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sound-name.active.svelte-axct91.svelte-axct91{color:hsl(220, 25%, 50%, calc(100% / 3))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sounds;
  const possibleTags = {
    Ambient: /^ambient\//,
    Buttons: /^buttons\//,
    Combined: /^combined\//,
    Common: /^common\//,
    Doors: /^doors\//,
    Friends: /^friends\//,
    HL1: /^hl1\//,
    Items: /^items\//,
    Music: /^music\//,
    NPC: /^npc\//,
    Physics: /^physics\//,
    Plats: /^plats\//,
    Player: /^player\//,
    Test: /^test\//,
    UI: /^ui\//,
    Vehicles: /^vehicles\//,
    "Voice Overs": /^vo\//,
    Weapons: /^weapons\//,
    Miscellaneous: /^(resource|beams)\//
  };
  let { data } = $$props;
  let tags = [];
  let search = "";
  const generateTagsFromFolders = (sounds2) => {
    const folders = /* @__PURE__ */ new Set();
    sounds2.forEach((sound) => {
      const folder = sound.split("/")[1];
      if (folder)
        folders.add(folder);
    });
    return Array.from(folders).sort();
  };
  let volume = 0.75;
  let minimalMode = browser;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    sounds = data.sounds.filter((sound) => {
      const soundPath = sound.split("/").slice(1).join("/");
      return soundPath.includes(search) && (tags.length === 0 || tags.some((tag) => possibleTags[tag].test(soundPath)));
    });
    generateTagsFromFolders(data.sounds);
    $$rendered = `<div class="container svelte-axct91"><main class="svelte-axct91"><div class="header svelte-axct91"><div class="github svelte-axct91"><a href="https://github.com/ceifa/hl2-soundlist" target="_blank" rel="noreferrer" class="svelte-axct91">Made with ❤️
				</a></div>
			<div class="config svelte-axct91"><div class="volume-bar svelte-axct91"><input type="range" min="0" max="1" step="0.01" class="svelte-axct91"${add_attribute("value", volume, 0)}></div>

				${`${validate_component(Switch, "Switch").$$render(
      $$result,
      { checked: minimalMode },
      {
        checked: ($$value) => {
          minimalMode = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}</div></div>

		<div class="search-bar-container svelte-axct91"><input class="search-input svelte-axct91" type="text" placeholder="Search sounds"${add_attribute("value", search, 0)}></div>

		<div class="tags svelte-axct91">${each(Object.keys(possibleTags), (tag) => {
      return `<button class="${["tag svelte-axct91", tags.includes(tag) ? "active" : ""].join(" ").trim()}">${escape(tag)}
				</button>`;
    })}</div>

		<div class="${["sounds svelte-axct91", minimalMode ? "minimal" : ""].join(" ").trim()}">${each(sounds, (sound) => {
      let displayName = sound.replace(/^(css|hl2|gmod)\//, "");
      sound.split("/")[0];
      return `
				
				${minimalMode ? `<button class="${[
        "sound-name svelte-axct91",
        ""
      ].join(" ").trim()}">${escape(displayName)}
					</button>` : `<div class="sound-container svelte-axct91"><button class="${[
        "play-button svelte-axct91",
        ""
      ].join(" ").trim()}"></button>
						<div class="sound-name svelte-axct91">${escape(displayName)}</div>
					</div>`}`;
    })}</div></main>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
