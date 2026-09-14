// To make this as performant as possible, we'll be using webpack's `require`
// and `module.exports` rather than loading this all through babel and using
// its `import` and `export` statements.
//actually that sucks ass so i changed it to be import statements again, will have to fix more later
const marth = import './animations/marth';
const puff = import './animations/puff';
const fox = import './animations/fox';
const falco = import './animations/falco';
const falcon = import './animations/falcon';

window.animations = [
  marth,
  puff,
  fox,
  falco,
  falcon
];
