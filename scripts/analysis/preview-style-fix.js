const fs = require('fs');
const path = 'docs/encyclopedia/4-code-dev/4-14-razrabotka-i-otladka/1.md';
const orig = fs.readFileSync(path, 'utf8');

function replaceGuillemets(text) {
  return text.replace(/«/g, '"').replace(/»/g, '"');
}
function fixNegative(text) {
  text = text.replace(/([—–-])\s*не\s+([^,]{2,140}?), а\s+/g, '$1 ');
  text = text.replace(/\bне\s+просто\s+([^,]{2,140}?), а\s+/gi, '');
  text = text.replace(
    /([\p{L}\p{N}_][\p{L}\p{N}_\s"«»\-]{0,40})\s+не\s+([^,]{2,100}?), а\s+/gu,
    '$1 — '
  );
  return text;
}
function fixColons(text) {
  return text.replace(/:\s+(?=[^.\n;]{0,160}(?:,[^.\n;]{1,80}){2,})/g, ' — ');
}

let t = orig;
t = replaceGuillemets(t);
t = fixNegative(t);
t = fixColons(t);

const lines = orig.split('\n');
const tl = t.split('\n');
let n = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] !== tl[i]) {
    n++;
    if (n <= 25) {
      console.log(`${i + 1} BEFORE: ${lines[i]}`);
      console.log(`   AFTER: ${tl[i]}`);
      console.log('');
    }
  }
}
console.log('total changed lines:', n);
