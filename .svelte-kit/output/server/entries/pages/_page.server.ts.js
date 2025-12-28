const load = async ({ fetch }) => {
  const fetchPaths = async (url, prefix) => {
    const res = await fetch(url);
    const text = await res.text();
    const paths = text.split("\n").map((path) => path.replace("sound\\", "").replaceAll("\\", "/").trim()).filter((path) => path.length > 0).map((path) => `${prefix}${path}`);
    return paths;
  };
  const [sounds, css, gmod] = await Promise.all([
    fetchPaths("/hl2/path.txt", "hl2/"),
    fetchPaths("/css/path.txt", "css/"),
    fetchPaths("/gmod/path.txt", "gmod/")
  ]);
  const seenFilenames = /* @__PURE__ */ new Set();
  const allSounds = [sounds, css, gmod].flat().filter((path) => {
    const filename = path.split("/").pop();
    if (seenFilenames.has(filename))
      return false;
    seenFilenames.add(filename);
    return true;
  });
  return {
    sounds: allSounds
  };
};
export {
  load
};
