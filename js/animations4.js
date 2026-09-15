// To make this as performant as possible, we'll be using webpack's `require`
// and `module.exports` rather than loading this all through babel and using
// its `import` and `export` statements.
// actually that sucks ass so i changed it to be import statements again, will have to fix more later
import marth from "./animations/marth/index.js";
import puff from "./animations/puff/index.js";
import fox from "./animations/fox/index.js";
import falco from "./animations/falco/index.js";
import falcon from "./animations/falcon/index.js";

window.animations = [
  marth,
  puff,
  fox,
  falco,
  falcon
];
