const { themesData } = require('./data.js');

const counts = new Map();
const ignoredTokens = new Set(['tion']);

function addWords(text) {
  const words = String(text)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\/[^/]*\//g, ' ')
    .replace(/\*\*/g, ' ')
    .replace(/\(([a-zà-ÿ]+)\)/gi, '$1')
    .replace(/[•·_\-\/→]/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .toLowerCase()
    .match(/[a-zà-ÿ0-9']+/gi) || [];

  for (const word of words) {
    if (word.length >= 2 && !ignoredTokens.has(word)) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  }
}

for (const themeKey of Object.keys(themesData)) {
  const theme = themesData[themeKey];

  if (Array.isArray(theme.tensesData)) {
    for (const tense of theme.tensesData) {
      for (const level of ['easy', 'medium', 'hard']) {
        if (Array.isArray(tense[level])) {
          for (const sentence of tense[level]) {
            addWords(sentence);
          }
        }
      }
    }
  }

  if (Array.isArray(theme.pronunciationData)) {
    for (const technique of theme.pronunciationData) {
      for (const level of ['easy', 'medium', 'hard']) {
        if (Array.isArray(technique[level])) {
          for (const item of technique[level]) {
            if (item !== undefined && item !== null) {
              addWords(item);
            }
          }
        }
      }
    }
  }
}

const top100 = [...counts.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 100);

for (let i = 0; i < top100.length; i++) {
  const [word, count] = top100[i];
  console.log(`${i + 1}. ${word} - ${count}`);
}
